import { useState, useEffect, useCallback } from "react";

interface DialogContent {
  isOpen: boolean;
  title: string;
  message: string;
  showDialog: () => void;
  onconfirm: (...args: any[]) => void;
  oncancel: () => void;
}

interface DialogResult {
  isOpen: boolean;
  title: string;
  message: string;
  showDialog: (options: DialogContent) => void;
  onconfirm: (...args: any[]) => void;
  oncancel: () => void;
}

const useDialog = (): DialogResult => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [message, setmessage] = useState<string>("");
  const [title, settitle] = useState<string>("");
  const [onconfirm, setonconfirm] = useState<() => void>(() => () => {});

  const [oncancel, setoncancel] = useState<() => void>(() => () => {});

  const showDialog = useCallback((options: DialogContent) => {
    settitle(options.title);
    setmessage(options.message);
    setonconfirm(() => options.onconfirm);
    setoncancel(() => options.oncancel);
    setIsOpen(true);
  }, []);

  return {
    isOpen,
    showDialog,
    title,
    message,
    onconfirm: () => {
      onconfirm();
      setIsOpen(false);
    },
    oncancel: () => {
      oncancel();
      setIsOpen(false);
    },
  };
};

export default useDialog;
