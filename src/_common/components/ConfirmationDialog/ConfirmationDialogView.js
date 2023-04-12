import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function ConfirmationDialogView({ title, text, handleCloseConfirmation, handleDeleteConfirmation }) {
  return (
    <Dialog open onClose={handleCloseConfirmation} maxWidth="sm" fullWidth>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent dividers>
        <DialogContentText>{text}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseConfirmation} color="default">
          Cancelar
        </Button>
        <Button onClick={handleDeleteConfirmation} color="primary" autoFocus>
          Confirmar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
