import React from 'react';
import { Modal, Button } from 'react-bootstrap';

interface DialogProps {
  isOpen: boolean;
  dialogContent: {
    title: string;
    message: string;
  };
  closeDialog: () => void;
  confirmDialog:()=> void;
}

const ModelDialog: React.FC<DialogProps> = ({ isOpen, dialogContent, closeDialog,confirmDialog }) => {
  return (
    <Modal show={isOpen} onHide={closeDialog}>
      <Modal.Header closeButton>
        <Modal.Title>{dialogContent.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{dialogContent.message}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeDialog}>
          cancel
        </Button>
        <Button variant="secondary" onClick={confirmDialog}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModelDialog;
