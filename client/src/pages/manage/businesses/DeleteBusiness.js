import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { useState } from "react";
import StyledDeleteIcon from "../../../styles/StyledDeleteIcon";
import IconButton from '@mui/material/IconButton';
import StyledLoadingButton from "../../../styles/StyledLoadingButton";
import DialogActions from '@mui/material/DialogActions';
import DeleteIcon from '@mui/icons-material/Delete';
import ErrorList from "../../../components/ErrorList";

const DeleteBusiness = ({ appState, business }) => {

  const { user, setUser } = appState;

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteClick = () => {
    fetch(`/businesses/${business.business_id}`, { method: "DELETE" })
      .then(res => {
        setLoading(false);
        if (res.ok) {
          handleClose();
          setUser({
            ...user,
            businesses: user.businesses.filter(filterBusiness => filterBusiness.business_id !== business.business_id)
          });
        } else {
          res.json().then(json => setErrors(json.errors));
        }
      })
  };

  const handleIconClick = (e) => {
    e.stopPropagation();
    setOpen(true);
  }

  return (
    <>
      <IconButton edge="end" aria-label="delete" onClick={handleIconClick}>
        <StyledDeleteIcon />
      </IconButton>    
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Delete <b>{business.name}</b>?
          </DialogContentText>
          <ErrorList errors={errors} />
        </DialogContent>
        <DialogActions>
        <StyledLoadingButton
          onClick={handleDeleteClick}
          loading={loading}
          type="submit"
          sx={{ margin: "10px" }} 
          startIcon={<DeleteIcon />}>
          Delete
        </StyledLoadingButton>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default DeleteBusiness;