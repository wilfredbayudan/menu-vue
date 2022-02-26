import Dialog from '@mui/material/Dialog';
import { useState } from "react";
import DialogTitle from '@mui/material/DialogTitle';
import StyledLoadingButton from "../../../styles/StyledLoadingButton";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DialogContent from '@mui/material/DialogContent';
import FormInput from "../../../styles/FormInput"
import DialogActions from '@mui/material/DialogActions';
import ResponsiveTextInput from "../../../styles/ResponsiveTextInput";
import ErrorList from "../../../components/ErrorList";

const AddUser = ({ selectedBusiness, businessUsers, setBusinessUsers }) => {

  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
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
    setFormData({
      email: ""
    })
    setLoading(true);
    fetch(`/businesses/${selectedBusiness}/users`, {
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
            setBusinessUsers([
              ...businessUsers,
              json
            ]);
            handleClose();
          })
        } else {
          res.json().then(json => setErrors(json.errors));
        }
      })
  }

  return (
    <>
      <StyledLoadingButton onClick={() => setOpen(true)} startIcon={<AddCircleIcon />}>Add User</StyledLoadingButton>
      <Dialog
        fullWidth
        maxWidth="sm"
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <form onSubmit={handleSubmit}>
          <DialogTitle id="alert-dialog-title">Add User</DialogTitle>
          <DialogContent>
            <FormInput>
              <ResponsiveTextInput
                fullWidth
                label="Email Address"
                name="email"
                variant="filled"
                value={formData.email}
                onChange={handleChange}
              />
            </FormInput>
          <ErrorList errors={errors} />
          </DialogContent>
          <DialogActions>
            <StyledLoadingButton
              loading={loading}
              type="submit"
              sx={{ margin: "10px" }} 
              startIcon={<AddCircleIcon />}>
              Add User
            </StyledLoadingButton>
          </DialogActions>
        </form>
      </Dialog>
    </>
  )
}

export default AddUser;