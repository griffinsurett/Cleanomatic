// src/components/Modal.jsx
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function Modal({
  isOpen,
  onClose,
  children,
  closeButton = true,
  closeButtonClass = "absolute top-0 right-0 m-[var(--spacing-sm)]",
  overlayClass = 'bg-black bg-opacity-50',
  className = "bg-[var(--color-bg)] shadow-xl p-[var(--spacing-md)] rounded-[var(--radius-md)]",
  allowScroll = false,
}) {
  // renderModal = should we keep it in the DOM?
  const [renderModal, setRenderModal] = useState(isOpen);
  // visible = are we in the "open" state (opacity-100 & translate-y-0)?
  const [visible, setVisible] = useState(false);

  // When isOpen flips true, start rendering & animate in.
  useEffect(() => {
    if (isOpen) {
      setRenderModal(true);
      // wait for next frame so the browser paints the overlay at opacity-0 first
      requestAnimationFrame(() => {
        setVisible(true);
      });
    } else {
      // trigger exit animation
      setVisible(false);
    }
  }, [isOpen]);

  // After exit transition completes, unmount
  const handleOverlayTransitionEnd = () => {
    if (!visible) {
      setRenderModal(false);
    }
  };

  // Lock scroll when open
  useEffect(() => {
    if (renderModal && !allowScroll) {
      const original = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [renderModal, allowScroll]);

  if (!renderModal) return null;

  return createPortal(
    <div
      className={`
        fixed inset-0 z-[250] flex items-center justify-center
        ${overlayClass}
        transition-opacity duration-300 ease-in-out
        ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}
      `}
      onClick={onClose}
      onTransitionEnd={handleOverlayTransitionEnd}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`
          relative ${className}
          transform-gpu transition-transform duration-300 ease-in-out origin-top
          ${visible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
        `}
        onClick={e => e.stopPropagation()}
      >
        {closeButton && (
          <button onClick={onClose} className={closeButtonClass} aria-label="Close modal">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <line x1="4" y1="4" x2="20" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line x1="20" y1="4" x2="4" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        )}
        {children}
      </div>
    </div>,
    document.body
  );
}
