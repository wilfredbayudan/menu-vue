import Dialog from '@mui/material/Dialog';
import { useState } from "react";
import DialogTitle from '@mui/material/DialogTitle';
import StyledLoadingButton from "../../../../styles/StyledLoadingButton";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ItemForm from "./ItemForm";

const AddItem = ({ menuManagerState }) => {

  const { business, setBusiness, selectedCategory } = menuManagerState;

  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    item: "",
    description: "",
    image: "",
    price: ""
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
    fetch(`/businesses/${business.id}/menu/categories/${selectedCategory}/items`, {
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
            setBusiness({
              ...business,
              menu: {
                ...business.menu,
                items: [
                  ...business.menu.items,
                  json
                ]
              }
            });
            setFormData({
              item: "",
              description: "",
              image: "",
              price: ""
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
      <StyledLoadingButton onClick={() => setOpen(true)} startIcon={<AddCircleIcon />}>Add Item</StyledLoadingButton>
      <Dialog
        fullWidth
        maxWidth="sm"
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">New Item</DialogTitle>
        <ItemForm handleSubmit={handleSubmit} handleChange={handleChange} formData={formData} errors={errors} loading={loading} />
      </Dialog>
    </>
  )
}

export default AddItem;