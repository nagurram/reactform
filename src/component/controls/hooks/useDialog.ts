import { useState, useEffect } from "react";

interface DialogContent {
  title: string;
  message: string;
}

const useDialog = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [result, setResult] = useState<string>('No');
  const [dialogContent, setDialogContent] = useState<DialogContent>({
    title: "",
    message: "",
  });

  const openDialog = (title: string, message: string,onconfirm:()=>void) => {
    setDialogContent({ title, message });
    setIsOpen(true);
    
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  const confirmDialog = () => {
    setIsOpen(false);    
    setResult('Yes');
  };

  return {
    isOpen,
    result,
    dialogContent,
    openDialog,
    closeDialog,
    confirmDialog,
  };
};

export default useDialog;
