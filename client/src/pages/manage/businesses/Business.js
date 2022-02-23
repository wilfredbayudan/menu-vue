import styled from "styled-components";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import EditBusiness from "./EditBusiness";

const Business = ({ appState, business }) => {

  return (
    <ListItem button divider secondaryAction={
      <>
        <EditBusiness appState={appState} business={business} />
      </>
    }>
      <ListItemText primary={business.name} />
    </ListItem>
  )
};

export default Business;