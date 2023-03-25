import ConfirmationDialogView from './ConfirmationDialogView';

const ConfirmationDialog = ({ title, text, handleDeleteConfirmation, handleCloseConfirmation }) => {
  return <ConfirmationDialogView {...{ handleDeleteConfirmation, title, text, handleCloseConfirmation }} />;
};

export default ConfirmationDialog;
