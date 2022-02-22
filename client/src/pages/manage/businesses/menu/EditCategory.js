import Dialog from '@mui/material/Dialog';
import { useState } from "react";
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import StyledEditIcon from "../../../../styles/StyledEditIcon";
import CategoryForm from "./CategoryForm";

const EditCategory = ({ menuManagerState, category }) => {

  const { business, setBusiness, setSelectedCategory } = menuManagerState;

  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    category: category.category,
    description: category.description
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
    fetch(`/businesses/${business.id}/menu/categories/${category.id}`, {
      method: "PATCH",
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
            console.log(business);
            console.log(json);
            setBusiness({
              ...business,
              menu: {
                ...business.menu,
                categories: business.menu.categories.map(mappedCategory => {
                  if (mappedCategory.id !== json.id) return mappedCategory;
                  return json;
                })
              }
            });
            setSelectedCategory(json.id);
            handleClose();
          })
        } else {
          res.json().then(json => setErrors(json.errors));
        }
      })
  }

  return (
    <>
      <IconButton edge="end" aria-label="edit" onClick={() => setOpen(true)}>
        <StyledEditIcon />
      </IconButton>
      <Dialog
        fullWidth
        maxWidth="sm"
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Edit Category</DialogTitle>
        <CategoryForm edit="true" handleSubmit={handleSubmit} handleChange={handleChange} formData={formData} errors={errors} loading={loading} />
      </Dialog>
    </>
  )
}

export default EditCategory;