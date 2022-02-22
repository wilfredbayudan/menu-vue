import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { useState } from "react";
import StyledDeleteIcon from "../../../../styles/StyledDeleteIcon";
import IconButton from '@mui/material/IconButton';
import StyledLoadingButton from "../../../../styles/StyledLoadingButton";
import DialogActions from '@mui/material/DialogActions';
import DeleteIcon from '@mui/icons-material/Delete';
import ErrorList from "../../../../components/ErrorList";

const DeleteCategory = ({ menuManagerState, category }) => {

  const { business, setBusiness, setSelectedCategory } = menuManagerState;

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteClick = () => {
    fetch(`/businesses/${business.id}/menu/categories/${category.id}`, { method: "DELETE" })
      .then(res => {
        setLoading(false);
        if (res.ok) {
          handleClose();
          setSelectedCategory(null);
          setBusiness({
            ...business,
            menu: {
              ...business.menu,
              categories: business.menu.categories.filter(filterCategory => filterCategory.id !== category.id)
            }
          });
        } else {
          res.json().then(json => setErrors(json.errors));
        }
      })
  };

  return (
    <>
      <IconButton edge="end" aria-label="delete" onClick={() => setOpen(true)}>
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
            Delete <b>{category.category}</b> from {business.name}?
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

export default DeleteCategory;