import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';

const User = ({ loggedInUserId, businessUser }) => {
  return (
    <ListItem button divider secondaryAction={
      loggedInUserId !== businessUser.id ?
      <>
        <IconButton edge="end" aria-label="Preview">
          <PersonRemoveIcon />
        </IconButton>
      </>
      : <>Owner</>
    }>
      <ListItemText primary={`${businessUser.first_name} ${businessUser.last_name}`} secondary={businessUser.email} />
    </ListItem>
  )
};

export default User;