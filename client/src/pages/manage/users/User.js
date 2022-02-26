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

const User = ({ loggedInUserId, businessUser, isOwner }) => {
  return (
    <StyledListItem divider secondaryAction={
      <>
        { isOwner && (businessUser.id !== loggedInUserId) &&
          <IconButton edge="end" aria-label="Preview">
            <PersonRemoveIcon />
          </IconButton>
        }
        {
          businessUser.owner && "Business Owner"
        }
      </>
    }>
      <ListItemText primary={`${businessUser.first_name} ${businessUser.last_name}`} secondary={businessUser.email} />
    </StyledListItem>
  )
};

export default User;