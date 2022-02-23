import Dialog from '@mui/material/Dialog';
import { useState } from "react";
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import StyledEditIcon from "../../../styles/StyledEditIcon";
import BusinessForm from "./BusinessForm";

const EditBusiness = ({ appState, business }) => {

  const { user, setUser } = appState;

  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: business.name,
    description: business.description,
    image: business.image,
  })
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseWithoutSave = () => {
    setFormData({
      name: business.name,
      description: business.description,
      image: business.image
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
    console.log(formData);
    setLoading(true);
    fetch(`/businesses/${business.business_id}`, {
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
            console.log(json.id);
            setUser({
              ...user,
              businesses: user.businesses.map(mappedBusiness => {
                if (mappedBusiness.business_id !== json.id) return mappedBusiness;
                return {
                  business_id: json.id,
                  name: json.name,
                  description: json.description,
                  image: json.image,
                  slug: json.slug,
                  owner: true
                }
              })
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
      <IconButton edge="end" aria-label="edit" onClick={() => setOpen(true)}>
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
        <DialogTitle id="alert-dialog-title">New Business</DialogTitle>
        <BusinessForm edit handleSubmit={handleSubmit} handleChange={handleChange} formData={formData} errors={errors} loading={loading} />
      </Dialog>
    </>
  )
}

export default EditBusiness;