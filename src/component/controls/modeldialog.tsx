import React from "react";
import { Modal, Button } from "react-bootstrap";

interface DialogProps {
  id: string;
  isOpen: boolean;

  title: string;
  message: string;

  oncancel: () => void;
  onconfirm: () => void;
}

const ModelDialog: React.FC<DialogProps> = ({
  id,
  isOpen,
  title,
  message,
  oncancel,
  onconfirm,
}) => {
  return (
    <Modal show={isOpen} onHide={oncancel} key={id}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={oncancel}>
          cancel
        </Button>
        <Button variant="secondary" onClick={onconfirm}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModelDialog;
