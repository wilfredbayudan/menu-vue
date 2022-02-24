import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import EditBusiness from "./EditBusiness";
import DeleteBusiness from "./DeleteBusiness";
import { useNavigate } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import BusinessQR from "./BusinessQR";

const Business = ({ appState, business }) => {

  const navigate = useNavigate();

  const handleBusinessClick = (e) => {
    e.stopPropagation();
    navigate(`/manage/businesses/${business.business_id}/menu`);
  }

  const handlePreviewClick = () => {
    navigate(`/${business.slug}`);
  }

  return (
    <ListItem button divider secondaryAction={
      <>
        <IconButton edge="end" aria-label="Preview" onClick={handlePreviewClick}>
          <FindInPageIcon />
        </IconButton>
        <BusinessQR business={business} />
        <EditBusiness appState={appState} business={business} />
        <DeleteBusiness appState={appState} business={business} />
      </>
    }>
      <ListItemText primary={business.name} secondary={`/${business.slug}`} onClick={handleBusinessClick} />
    </ListItem>
  )
};

export default Business;