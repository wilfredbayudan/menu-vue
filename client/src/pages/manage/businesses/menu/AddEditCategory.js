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

  const { business, setBusiness, setSelectedCategory } = menuManagerState;

  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    category: "",
    description: ""
  })
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    fetch(`/businesses/${business.id}/menu/categories`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(res => {
        setLoading(false);
        if (res.ok) {
          res.json().then(json => {
            console.log(json);
          })
        } else {
          res.json().then(setErrors);
        }
      })
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
        <form onSubmit={handleSubmit}>
          <DialogContent>
                <FormInput>
                  <ResponsiveTextInput
                    autoFocus
                    required
                    fullWidth
                    label="Category Name"
                    name="category"
                    variant="filled"
                    value={formData.category}
                    onChange={handleChange}
                  />
                </FormInput>
                <FormInput>
                  <ResponsiveTextInput
                    label="Description"
                    multiline
                    fullWidth
                    rows="4"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    variant="filled"
                  />
                </FormInput>
              <ErrorList errors={errors} />
          </DialogContent>
          <DialogActions>
            <StyledLoadingButton
              loading={loading}
              type="submit"
              sx={{ margin: "10px" }} 
              startIcon={<AddCircleIcon 
            />}>
              Add Category
            </StyledLoadingButton>
          </DialogActions>
        </form>
      </Dialog>
    </>
  )
}

export default AddEditCategory;