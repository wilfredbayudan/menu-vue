import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { useState } from "react";
import StyledDeleteIcon from "../../../styles/StyledDeleteIcon";
import IconButton from "@mui/material/IconButton";
import StyledLoadingButton from "../../../styles/StyledLoadingButton";
import DialogActions from "@mui/material/DialogActions";
import DeleteIcon from "@mui/icons-material/Delete";
import ErrorList from "../../../components/ErrorList";
import ResponsiveTextInput from "../../../styles/ResponsiveTextInput";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../store/userSlice";

const DeleteBusiness = ({ business }) => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);

  const { user } = userState;

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const [confirmation, setConfirmation] = useState("");

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    fetch(`/businesses/${business.business_id}`, { method: "DELETE" }).then(
      (res) => {
        setLoading(false);
        if (res.ok) {
          handleClose();
          dispatch(
            login({
              ...user,
              businesses: user.businesses.filter(
                (filterBusiness) =>
                  filterBusiness.business_id !== business.business_id
              ),
            })
          );
        } else {
          res.json().then((json) => setErrors(json.errors));
        }
      }
    );
  };

  const handleIconClick = (e) => {
    e.stopPropagation();
    setOpen(true);
  };

  return (
    <>
      <IconButton edge="end" aria-label="delete" onClick={handleIconClick}>
        <StyledDeleteIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <form onSubmit={handleDelete}>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Delete <b>{business.name}</b>?
            </DialogContentText>
            <ResponsiveTextInput
              autoFocus
              sx={{ marginTop: "10px" }}
              fullWidth
              label="Confirmation"
              name="confirmation"
              helperText={`Enter "${business.slug}" to confirm`}
              variant="filled"
              value={confirmation}
              onChange={(e) => setConfirmation(e.target.value)}
            />

            <ErrorList errors={errors} />
          </DialogContent>
          <DialogActions>
            <StyledLoadingButton
              disabled={confirmation !== business.slug}
              onClick={handleDelete}
              loading={loading}
              type="submit"
              sx={{ margin: "10px" }}
              startIcon={<DeleteIcon />}
            >
              Delete
            </StyledLoadingButton>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

export default DeleteBusiness;
