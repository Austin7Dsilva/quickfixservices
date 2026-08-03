import React, { useState, useRef, useEffect } from 'react';
import { 
  FaCalendarAlt, 
  FaPhoneAlt, 
  FaPlus, 
  FaTrashAlt, 
  FaArrowLeft, 
  FaShieldAlt,
  FaFileDownload 
} from 'react-icons/fa';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

// Assets & Styles
import logo from '../assets/logo.png';
import './Billing.css';

export default function Billing() {
  // Pre-fill fields with sample data matching the template image
  const [customerName, setCustomerName] = useState('Heaven Leaf');
  const [date, setDate] = useState(() => {
    const today = new Date();
    // Default to YYYY-MM-DD
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  });

  const [items, setItems] = useState([
    {
      id: 1,
      description: 'LED Tube Light (New)',
      amount: 320.00
    },
    {
      id: 2,
      description: 'Bulb Holder for Street Light',
      amount: 40.00
    },
    {
      id: 3,
      description: 'Labour Work & Travel\nTime: 12:00 PM IST to 7:00 PM IST (7 Hours)\nWork Done:\n• Two Tube Light Fittings\n• One Street Light Fitting\n• Street Light Fault Diagnosis (Near Kitchen)\n• Fan Fault Diagnosis\n• Door Edge Cutting (Near Door)\n• Switchboard Fitting\n• Loose Switchboard Tightening\n• Travelling Charges Included',
      amount: 1500.00
    }
  ]);

  // Form states for adding a new item
  const [newDescription, setNewDescription] = useState('');
  const [newAmount, setNewAmount] = useState('');
  
  const [isGenerating, setIsGenerating] = useState(false);
  const descriptionRef = useRef(null);

  // Auto-scroll to top when component loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Format Date to "Month Day, Year" (e.g. August 1, 2026)
  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const dateObj = new Date(dateStr);
    if (isNaN(dateObj.getTime())) return dateStr;
    return dateObj.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  // Format Amount to Indian Currency format (e.g., 1,500.00)
  const formatAmount = (num) => {
    return new Intl.NumberFormat('en-IN', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(num);
  };

  // Add Item to the list
  const handleAddItem = () => {
    const trimmedDesc = newDescription.trim();
    const parsedAmount = parseFloat(newAmount);

    if (!trimmedDesc) {
      alert('Please enter a description.');
      return;
    }
    if (isNaN(parsedAmount) || parsedAmount < 0) {
      alert('Please enter a valid amount.');
      return;
    }

    const newItem = {
      id: Date.now(),
      description: trimmedDesc,
      amount: parsedAmount
    };

    setItems([...items, newItem]);
    
    // Clear inputs and refocus description field
    setNewDescription('');
    setNewAmount('');
    if (descriptionRef.current) {
      descriptionRef.current.focus();
    }
  };

  // Remove Item from list
  const handleRemoveItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  // Amount field key listener (Enter adds the item)
  const handleAmountKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddItem();
    }
  };

  // Calculate Subtotal / Total
  const totalAmount = items.reduce((sum, item) => sum + parseFloat(item.amount || 0), 0);

  // Generate PDF and Download
  const handleDownloadPDF = async () => {
    const originalElement = document.getElementById('invoice-paper-element');
    if (!originalElement) return;

    setIsGenerating(true);

    try {
      // Create a temporary unscaled container offscreen for rendering PDF high-fidelity image
      const tempContainer = document.createElement('div');
      tempContainer.style.position = 'absolute';
      tempContainer.style.left = '-9999px';
      tempContainer.style.top = '0';
      tempContainer.style.width = '794px'; // Fixed target width for A4 ratio
      tempContainer.style.height = 'auto';
      tempContainer.style.backgroundColor = '#ffffff';

      // Clone original element
      const clonedElement = originalElement.cloneNode(true);
      
      // Clear scale transform, box-shadows, and round borders in the clone for standard PDF layout
      clonedElement.style.transform = 'none';
      clonedElement.style.width = '794px';
      clonedElement.style.minHeight = '1123px';
      clonedElement.style.margin = '0';
      clonedElement.style.boxShadow = 'none';
      clonedElement.style.borderRadius = '0';

      tempContainer.appendChild(clonedElement);
      document.body.appendChild(tempContainer);

      // Wait briefly for images and layout to render fully
      await new Promise((resolve) => setTimeout(resolve, 300));

      const canvas = await html2canvas(clonedElement, {
        scale: 2, // High resolution crisp display
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        logging: false,
      });

      // Clean up temp container from DOM
      document.body.removeChild(tempContainer);

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = 210; // A4 width
      const imgWidth = pdfWidth;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);

      // Generate invoice filename
      const cleanCustomerName = customerName.trim().replace(/[^a-zA-Z0-9]/g, '_') || 'Customer';
      pdf.save(`invoice_${cleanCustomerName}_${date}.pdf`);
    } catch (err) {
      console.error('Error generating PDF:', err);
      alert('An error occurred while generating the PDF. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  // Helper to split description into Title & Bullet points
  const renderDescriptionCell = (desc) => {
    if (!desc) return null;
    const lines = desc.split('\n').map(line => line.trim()).filter(line => line !== '');
    if (lines.length === 0) return null;

    const title = lines[0];
    const details = lines.slice(1);

    return (
      <div className="invoice-cell-desc-container">
        <div className="invoice-cell-desc-title">{title}</div>
        {details.length > 0 && (
          <ul className="invoice-bullet-list">
            {details.map((point, idx) => {
              // Strip out pre-existing bullet symbols if they exist
              const cleanPoint = point.replace(/^[-*•]\s*/, '');
              return <li key={idx}>{cleanPoint}</li>;
            })}
          </ul>
        )}
      </div>
    );
  };

  return (
    <div className="billing-portal-container">
      {/* LEFT SIDE: Billing Input Controls */}
      <div className="billing-editor-panel">
        <h2 className="billing-editor-title">
          Billing Workspace
        </h2>
        <p className="billing-editor-subtitle">
          Generate professional service invoices for Quick Fix customers
        </p>

        {/* Billed To */}
        <div className="billing-form-group">
          <label htmlFor="customerName">Customer Name (Billed To)</label>
          <input
            id="customerName"
            type="text"
            className="billing-input"
            placeholder="Enter customer name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />
        </div>

        {/* Date Selector */}
        <div className="billing-form-group">
          <label htmlFor="invoiceDate">Invoice Date</label>
          <input
            id="invoiceDate"
            type="date"
            className="billing-input"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        {/* Item Creator Form */}
        <div className="billing-form-group">
          <label>Add Item Details</label>
          <div className="billing-item-form-row">
            <div className="billing-item-desc-col">
              <textarea
                ref={descriptionRef}
                className="billing-textarea"
                placeholder="Description (First line is Title. Press Enter for bullet details)"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
              />
              <span className="keyboard-tip">Tip: Press Shift + Enter for bullet details.</span>
            </div>
            <div className="billing-item-amount-col">
              <input
                type="number"
                className="billing-input"
                placeholder="Amount (₹)"
                value={newAmount}
                onChange={(e) => setNewAmount(e.target.value)}
                onKeyDown={handleAmountKeyDown}
              />
            </div>
            <button 
              type="button" 
              className="billing-btn-add" 
              onClick={handleAddItem}
              title="Add Item (Or press Enter in Amount field)"
            >
              <FaPlus />
            </button>
          </div>
        </div>

        {/* Added Items List (Editor Grid) */}
        <div className="billing-items-list-container">
          <div className="billing-items-list-header">
            <span>Items Checklist</span>
            <span className="billing-items-list-count">{items.length} {items.length === 1 ? 'item' : 'items'}</span>
          </div>

          {items.length === 0 ? (
            <div className="editor-items-empty">No items added to invoice yet. Add an item above to get started.</div>
          ) : (
            <table className="editor-items-table">
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Amount</th>
                  <th style={{ width: '40px' }}></th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <div className="editor-item-desc">{item.description}</div>
                    </td>
                    <td>
                      <span className="editor-item-amount">₹ {formatAmount(item.amount)}</span>
                    </td>
                    <td>
                      <button 
                        type="button" 
                        className="editor-item-delete-btn"
                        onClick={() => handleRemoveItem(item.id)}
                        title="Delete Item"
                      >
                        <FaTrashAlt size={12} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Generate Invoice Action */}
        <div className="billing-editor-actions">
          <button 
            type="button" 
            className="billing-btn-submit" 
            onClick={handleDownloadPDF}
            disabled={isGenerating || items.length === 0}
          >
            <FaFileDownload />
            {isGenerating ? 'Rendering PDF...' : 'Download Invoice PDF'}
          </button>
          <a href="/#" className="policy-btn" style={{ alignSelf: 'center', marginTop: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FaArrowLeft size={12} /> Return to Main Site
          </a>
        </div>
      </div>

      {/* RIGHT SIDE: Real-time Live Invoice Preview Canvas */}
      <div className="billing-preview-pane">
        <div className="billing-preview-title">
          <span>Live Invoice Preview</span>
          <span>A4 Aspect Ratio</span>
        </div>

        <div className="preview-scale-wrapper">
          {/* Main print container */}
          <div className="invoice-paper" id="invoice-paper-element">
            {/* Header: Logo, Company Name, Invoice Title & Date */}
            <div className="invoice-header-row">
              <div className="invoice-header-left">
                <img src={logo} alt="Quick Fix Services Logo" className="invoice-logo-img" />
                <div className="invoice-header-divider"></div>
                <div className="invoice-company-details">
                  <div className="invoice-company-title">QUICK FIX</div>
                  <div className="invoice-company-subtitle">SERVICES</div>
                  <div className="invoice-phone-row">
                    <FaPhoneAlt className="invoice-phone-icon" />
                    <span>8095867649</span>
                  </div>
                </div>
              </div>
              <div className="invoice-header-right">
                <div className="invoice-title-text">INVOICE</div>
                <div className="invoice-date-container">
                  <FaCalendarAlt className="invoice-date-icon" />
                  <span>Date: {formatDate(date)}</span>
                </div>
              </div>
            </div>

            {/* Billed To Box */}
            <div className="invoice-billed-card">
              <div className="invoice-billed-label">Billed To</div>
              <div className="invoice-billed-name">{customerName || '—'}</div>
            </div>

            {/* Items Table */}
            <div className="invoice-table-wrapper">
              <table className="invoice-table">
                <thead>
                  <tr>
                    <th className="invoice-th-desc">Description</th>
                    <th className="invoice-th-amount">Amount (₹)</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.id}>
                      <td className="invoice-cell-desc">
                        {renderDescriptionCell(item.description)}
                      </td>
                      <td className="invoice-cell-amount">
                        {formatAmount(item.amount)}
                      </td>
                    </tr>
                  ))}
                  {items.length === 0 && (
                    <tr>
                      <td colSpan="2" style={{ textAlign: 'center', color: '#64748b', fontStyle: 'italic', padding: '30px' }}>
                        No items added to invoice preview
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Total Row */}
            <div className="invoice-total-container">
              <div className="invoice-total-box">
                <div className="invoice-total-label">Total</div>
                <div className="invoice-total-value">₹ {formatAmount(totalAmount)}</div>
              </div>
            </div>

            {/* 3-Month Workmanship Guarantee */}
            <div className="invoice-guarantee-box">
              <div className="invoice-guarantee-badge">
                <FaShieldAlt className="invoice-guarantee-badge-icon" />
              </div>
              <div className="invoice-guarantee-content">
                <div className="invoice-guarantee-title">3-Month Workmanship Guarantee</div>
                <div className="invoice-guarantee-text">
                  We provide a 3-Month Workmanship Guarantee on the services performed.
                  If any issue arises due to our workmanship within <strong>3 months</strong> from the invoice date,
                  Quick Fix Services will rectify the workmanship <strong>free of charge</strong>.
                </div>
              </div>
            </div>

            {/* Thank You section */}
            <div className="invoice-thanks-block">
              <div className="invoice-thanks-title-row">
                <div className="invoice-thanks-line"></div>
                <span className="invoice-thanks-title">Thank You!</span>
                <div className="invoice-thanks-line"></div>
              </div>
              <div className="invoice-thanks-subtitle">
                Thank you for choosing <strong>Quick Fix Services</strong>.
              </div>
            </div>

            {/* Footer Bar */}
            <div className="invoice-footer-bar">
              <div className="invoice-footer-title">Quick Fix Services</div>
              <div className="invoice-footer-phone-row">
                <FaPhoneAlt className="invoice-footer-phone-icon" />
                <span>8095867649</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
