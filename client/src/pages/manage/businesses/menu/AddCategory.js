import Dialog from '@mui/material/Dialog';
import { useState } from "react";
import DialogTitle from '@mui/material/DialogTitle';
import StyledLoadingButton from "../../../../styles/StyledLoadingButton";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CategoryForm from "./CategoryForm";

const AddCategory = ({ menuManagerState }) => {

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
            setBusiness({
              ...business,
              menu: {
                ...business.menu,
                categories: [
                  ...business.menu.categories,
                  json
                ]
              }
            });
            setSelectedCategory(json.id);
            setFormData({
              category: "",
              description: ""
            })
            handleClose();
          })
        } else {
          res.json().then(json => setErrors(json.errors));
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
        <CategoryForm handleSubmit={handleSubmit} handleChange={handleChange} formData={formData} errors={errors} loading={loading} />
      </Dialog>
    </>
  )
}

export default AddCategory;