// src/components/MobileCallButtonModal.jsx
import React, { useState } from "react";
import Modal from "./Modal.jsx";

export default function MobileCallButtonModal({ children }) {
  const [open, setOpen] = useState(false);

  const handleCheckboxChange = (event) => {
    setOpen(event.target.checked);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <div className="mobile-call-button-modal flex items-center">
      {/* Hidden checkbox to control modal visibility */}
      <input
        type="checkbox"
        id="mobile-call-toggle"
        className="hidden"
        checked={open}
        onChange={handleCheckboxChange}
      />
      {/* Label styled as a clickable phone icon */}
      <label
        htmlFor="mobile-call-toggle"
        className="p-[var(--spacing-sm)] rounded-full bg-primary text-bg cursor-pointer focus:outline-none"
        aria-label="Call Us"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          stroke="none"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a2 2 0 011.94 1.42l1.1 3.3a2 2 0 01-.45 1.89l-2.2 2.2a11.1 11.1 0 005.3 5.3l2.2-2.2a2 2 0 011.89-.45l3.3 1.1A2 2 0 0121 15.72V19a2 2 0 01-2 2c-9.39 0-17-7.61-17-17z"
          />
        </svg>
      </label>
      {open && (
        <Modal
          isOpen={open}
          onClose={closeModal}
          closeButton={true}
          closeButtonClass="text-bg absolute top-0 right-0 m-[var(--spacing-sm)]"
          // Here we set an explicit see-through black overlay:
          overlayClass="bg-primary bg-opacity-50"
          // Removing any background from the modal content container unless needed:
          className="flex items-center justify-center"
        >
          {children}
        </Modal>
      )}
    </div>
  );
}
