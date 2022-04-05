import Dialog from "@mui/material/Dialog";
import { useState } from "react";
import DialogTitle from "@mui/material/DialogTitle";
import StyledLoadingButton from "../../../styles/StyledLoadingButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import BusinessForm from "./BusinessForm";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../../store/userSlice";

const AddBusiness = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);

  const { user } = userState;

  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: "",
  });
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleClose = () => {
    setOpen(false);
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
    fetch(`/businesses`, {
      method: "POST",
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
              businesses: [
                ...user.businesses,
                {
                  business_id: json.id,
                  name: json.name,
                  description: json.description,
                  slug: json.slug,
                  image: json.image,
                  owner: true,
                },
              ],
            })
          );
          setFormData({
            name: "",
            description: "",
            image: "",
          });
          handleClose();
        });
      } else {
        res.json().then((json) => setErrors(json.errors));
      }
    });
  };

  return (
    <>
      <StyledLoadingButton
        onClick={() => setOpen(true)}
        startIcon={<AddCircleIcon />}
      >
        Add Business
      </StyledLoadingButton>
      <Dialog
        fullWidth
        maxWidth="sm"
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">New Business</DialogTitle>
        <BusinessForm
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

export default AddBusiness;
