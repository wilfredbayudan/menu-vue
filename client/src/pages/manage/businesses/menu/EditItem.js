import Dialog from '@mui/material/Dialog';
import { useState } from "react";
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import StyledEditIcon from "../../../../styles/StyledEditIcon";
import ItemForm from "./ItemForm";

const EditItem = ({ menuManagerState, item }) => {

  const { business, setBusiness, selectedCategory } = menuManagerState;

  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    item: item.item,
    description: item.description,
    image: item.image,
    price: item.price
  })
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseWithoutSave = () => {
    setFormData({
      item: item.item,
      description: item.description,
      image: item.image,
      price: item.price
    });
    setOpen(false);
    setErrors([]);
  }

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    fetch(`/businesses/${business.id}/menu/categories/${selectedCategory}/items/${item.id}`, {
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
            setBusiness({
              ...business,
              menu: {
                ...business.menu,
                items: business.menu.items.map(mappedItem => {
                  if (mappedItem.id !== json.id) return mappedItem;
                  return json;
                })
              }
            });
            handleClose();
          })
        } else {
          res.json().then(json => setErrors(json.errors));
        }
      })
  }

  return (
    <>
      <IconButton onClick={() => setOpen(true)}>
        <StyledEditIcon />
      </IconButton>
      <Dialog
        fullWidth
        maxWidth="sm"
        open={open}
        onClose={handleCloseWithoutSave}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Edit Item</DialogTitle>
        <ItemForm edit handleSubmit={handleSubmit} handleChange={handleChange} formData={formData} errors={errors} loading={loading} />
      </Dialog>
    </>
  )
}

export default EditItem;