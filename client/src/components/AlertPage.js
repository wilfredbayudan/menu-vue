import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DialogTitle from '@mui/material/DialogTitle';

const AlertPage = ({ alertTitle, alertText, onClose }) => {

  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const handleClose = () => {

    setOpen(false);

    if (onClose) {
      onClose();
    } else {
      navigate("/");
    }

  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 500)
    return(() => {
      clearTimeout(timer);
    })
  }, [setOpen])

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
        {alertTitle ? <DialogTitle id="alert-dialog-title">{alertTitle}</DialogTitle> : null}
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {alertText}
        </DialogContentText>
      </DialogContent>
    </Dialog>
  )
}

export default AlertPage;