import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { useState } from "react";
import DialogTitle from '@mui/material/DialogTitle';
import StyledLoadingButton from "../../../../styles/StyledLoadingButton";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import FormInput from "../../../../styles/FormInput"
import DialogActions from '@mui/material/DialogActions';
import ResponsiveTextInput from "../../../../styles/ResponsiveTextInput";
import ErrorList from "../../../../components/ErrorList";

const AddEditCategory = ({ menuManagerState }) => {

  const [open, setOpen] = useState(false);

  const handleClose = () => {

    setOpen(false);

  }

  return (
    <>
      <StyledLoadingButton onClick={() => setOpen(true)} fullWidth sx={{ marginTop: "10px" }} startIcon={<AddCircleIcon />}>Add Category</StyledLoadingButton>
      <Dialog
        fullWidth
        maxWidth="sm"
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
          <DialogTitle id="alert-dialog-title">New Category</DialogTitle>
        <DialogContent>
            <form>
              <FormInput>
                <ResponsiveTextInput
                  required
                  fullWidth
                  label="Category Name"
                  name="image"
                  id="business_image"
                  variant="filled"
                />
              </FormInput>
              <FormInput>
                <ResponsiveTextInput
                  label="Description"
                  multiline
                  fullWidth
                  rows="4"
                  name="image"
                  id="business_image"
                  variant="filled"
                />
              </FormInput>
            </form>
        </DialogContent>
        <DialogActions>
          <StyledLoadingButton 
            onClick={() => setOpen(true)}  
            sx={{ margin: "10px" }} 
            startIcon={<AddCircleIcon 
          />}>
            Add Category
          </StyledLoadingButton>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default AddEditCategory;