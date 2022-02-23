import FormInput from "../../../styles/FormInput"
import DialogActions from '@mui/material/DialogActions';
import ResponsiveTextInput from "../../../styles/ResponsiveTextInput";
import ErrorList from "../../../components/ErrorList";
import DialogContent from '@mui/material/DialogContent';
import StyledLoadingButton from "../../../styles/StyledLoadingButton";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from '@mui/icons-material/Edit';

const BusinessForm = ({ formData, handleSubmit, handleChange, errors, loading, edit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <DialogContent>
            <FormInput>
              <ResponsiveTextInput
                autoFocus
                required
                fullWidth
                label="Business Name"
                disabled={edit ? true : false}
                name="name"
                variant="filled"
                value={formData.name}
                onChange={handleChange}
              />
            </FormInput>
            <FormInput>
              <ResponsiveTextInput
                label="Description"
                autoFocus={edit ? true : false}
                multiline
                fullWidth
                rows="4"
                name="description"
                value={formData.description}
                onChange={handleChange}
                variant="filled"
              />
            </FormInput>
            <FormInput>
              <ResponsiveTextInput
                fullWidth
                label="Image URL"
                name="image"
                variant="filled"
                value={formData.image}
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
          startIcon={edit ? <EditIcon /> : <AddCircleIcon />}>
          { edit ? "Save Changes" : "Add Business" }
        </StyledLoadingButton>
      </DialogActions>
    </form>
  )
}

export default BusinessForm;