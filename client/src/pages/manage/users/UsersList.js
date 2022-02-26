import List from '@mui/material/List';
import User from "./User";

const UsersList = ({ selectedBusiness, loggedInUserId, businessUsers, isOwner}) => {

  const handleDeleteClick = (userId) => {
    console.log(`Deleting ${userId}`);
  }

  const renderUsers = businessUsers.map((businessUser, businessUserIdx) => {
    return <User key={businessUserIdx} isOwner={isOwner} loggedInUserId={loggedInUserId} businessUser={businessUser} handleDeleteClick={handleDeleteClick} />
  })

  return (
    <List>
      {renderUsers}
    </List>
  )
};

export default UsersList;