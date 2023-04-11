import { useState } from 'react';
import ConfirmationDialogView from './ConfirmationDialogView';

const ConfirmationDialog = ({title, text, handleDeleteConfirmation, handleClose}) => {
 /*  const handleClose = (event, reason) => {
    setConfirmationDialogIsOpen(false);
    if (reason === 'clickaway') {
      setConfirmationDialogIsOpen(false);
      setUserId(null)
      return;
    }
    setConfirmationDialogIsOpen(false);
  }; */


  
  return <ConfirmationDialogView {...{ handleDeleteConfirmation, title, text, handleClose}} />;
};

export default ConfirmationDialog;
