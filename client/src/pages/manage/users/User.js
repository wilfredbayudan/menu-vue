import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import styled from "styled-components";

const StyledListItem = styled(ListItem)`
  &:hover {
    background-color: #f5f5f5;
  }
`;

const User = ({ loggedInUserId, businessUser }) => {
  return (
    <StyledListItem divider secondaryAction={
      loggedInUserId !== businessUser.id ?
      <>
        <IconButton edge="end" aria-label="Preview">
          <PersonRemoveIcon />
        </IconButton>
      </>
      : <>Owner</>
    }>
      <ListItemText primary={`${businessUser.first_name} ${businessUser.last_name}`} secondary={businessUser.email} />
    </StyledListItem>
  )
};

export default User;