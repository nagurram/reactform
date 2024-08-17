import { useState, useEffect } from "react";

interface DialogContent {
  title: string;
  message: string;
}

const useDialog = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [dialogContent, setDialogContent] = useState<DialogContent>({
    title: "",
    message: "",
  });

  const openDialog = (title: string, message: string) => {
    setDialogContent({ title, message });
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  const confirmDialog = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    dialogContent,
    openDialog,
    closeDialog,
    confirmDialog,
  };
};

export default useDialog;
