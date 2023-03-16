import { useState } from 'react';
import ConfirmationDialogView from './ConfirmationDialogView';

const ConfirmationDialog = ({ title, text, handleConfirmation }) => {

  const [open, setOpen] = useState(false)

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      setOpen(false);
      return
    }
    setOpen(false);
  };
  return <ConfirmationDialogView {...{ open, title, text, handleClose, handleConfirmation }} />;
};

export default ConfirmationDialog;
