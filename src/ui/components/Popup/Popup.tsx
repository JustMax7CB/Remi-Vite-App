import React from 'react';
import './Popup.css';

interface PopupProps {
  title: string;
  onClose: () => void;
  onConfirm: () => void; // Optional callback for handling confirmation (e.g., when a form is submitted)
  children: React.ReactNode; // To allow custom content inside the popup
}

const Popup: React.FC<PopupProps> = ({ title, onClose, onConfirm, children }) => {

  return (
    <>
    <div className="popup">
      <div className="popup-content">
        <h2>{title}</h2>
        <div className='popup-children'>
        {children}
        </div>
        <div>
            <button className="popup-button popup-confirm-button" onClick={onConfirm}>
            אישור
            </button>
            <button className="popup-button popup-close-button" onClick={onClose}>
            סגירה
            </button>

        </div>
      </div>
    </div>
    </>
  );
};

export default Popup;
