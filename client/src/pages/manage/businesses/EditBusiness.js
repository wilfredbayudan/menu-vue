import Dialog from "@mui/material/Dialog";
import { useState } from "react";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import StyledEditIcon from "../../../styles/StyledEditIcon";
import BusinessForm from "./BusinessForm";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../store/userSlice";

const EditBusiness = ({ business }) => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);

  const { user } = userState;

  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: business.name,
    description: business.description,
    image: business.image,
  });
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseWithoutSave = () => {
    setFormData({
      name: business.name,
      description: business.description,
      image: business.image,
    });
    setOpen(false);
    setErrors([]);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch(`/businesses/${business.business_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) => {
      setLoading(false);
      if (res.ok) {
        res.json().then((json) => {
          dispatch(
            login({
              ...user,
              businesses: user.businesses.map((mappedBusiness) => {
                if (mappedBusiness.business_id !== json.id)
                  return mappedBusiness;
                return {
                  business_id: json.id,
                  name: json.name,
                  description: json.description,
                  image: json.image,
                  slug: json.slug,
                  owner: true,
                };
              }),
            })
          );
          handleClose();
        });
      } else {
        res.json().then((json) => setErrors(json.errors));
      }
    });
  };

  const handleIconClick = (e) => {
    e.stopPropagation();
    setOpen(true);
  };

  return (
    <>
      <IconButton edge="end" aria-label="edit" onClick={handleIconClick}>
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
        <DialogTitle id="alert-dialog-title">Edit Business</DialogTitle>
        <BusinessForm
          edit
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          formData={formData}
          errors={errors}
          loading={loading}
        />
      </Dialog>
    </>
  );
};

export default EditBusiness;
