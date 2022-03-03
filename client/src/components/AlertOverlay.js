import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { useState, useEffect } from "react";
import DialogTitle from '@mui/material/DialogTitle';

const AlertOverlay = ({ alert, setAlert }) => {

  const [open, setOpen] = useState(false);

  const handleClose = () => {

    setOpen(false);

    if (alert.onClose) {
      alert.onClose();
    } else {
      setOpen(false);
    }

  }

  useEffect(() => {
    if (alert) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [alert])

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
        {alert.title ? <DialogTitle id="alert-dialog-title">{alert.title}</DialogTitle> : null}
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {alert.text}
        </DialogContentText>
      </DialogContent>
    </Dialog>
  )
}

export default AlertOverlay;