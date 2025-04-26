import React, { useState } from 'react';
import Modal from './Modal.jsx';
import Button from './Button.jsx';

export default function ModalDemo() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <Button onClick={openModal} variant="primary">
        Open Demo Modal
      </Button>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <div className="p-[var(--spacing-lg)]">
          <h2 className="h2 mb-[var(--spacing-md)]">Demo Modal</h2>
          <p className="mb-[var(--spacing-lg)]">
            This is a demonstration modal using the shared Button and Modal components.
          </p>
          {/* <Button onClick={closeModal} variant="secondary">
            Close
          </Button> */}
        </div>
      </Modal>
    </>
  );
}
