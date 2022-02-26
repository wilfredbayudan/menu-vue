import List from '@mui/material/List';
import User from "./User";

const UsersList = ({ loggedInUserId, businessUsers, isOwner}) => {

  const renderUsers = businessUsers.map((businessUser, businessUserIdx) => {
    return <User key={businessUserIdx} isOwner={isOwner} loggedInUserId={loggedInUserId} businessUser={businessUser} />
  })

  return (
    <List>
      {renderUsers}
    </List>
  )
};

export default UsersList;