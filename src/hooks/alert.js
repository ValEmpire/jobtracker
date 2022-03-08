import { useState } from "react";

export const useAlert = () => {
  const [open, setOpen] = useState(false);

  const [message, setMessage] = useState(null);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleMessage = (message) => {
    setMessage(message);
  };

  return { open, handleClose, handleOpen, message, handleMessage };
};
