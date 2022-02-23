import styled from "styled-components";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import EditBusiness from "./EditBusiness";
import DeleteBusiness from "./DeleteBusiness";
import { useNavigate } from "react-router-dom";

const Business = ({ appState, business }) => {

  const navigate = useNavigate();

  const handleBusinessClick = (e) => {
    e.stopPropagation();
    navigate(`/manage/businesses/${business.business_id}/menu`)
  }

  return (
    <ListItem button divider secondaryAction={
      <>
        <EditBusiness appState={appState} business={business} />
        <DeleteBusiness appState={appState} business={business} />
      </>
    }>
      <ListItemText primary={business.name} onClick={handleBusinessClick} />
    </ListItem>
  )
};

export default Business;