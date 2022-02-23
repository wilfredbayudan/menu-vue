import styled from "styled-components";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const Business = ({ appState, business }) => {
  return (
    <ListItem button divider>
      <ListItemText primary={business.name} />
    </ListItem>
  )
};

export default Business;