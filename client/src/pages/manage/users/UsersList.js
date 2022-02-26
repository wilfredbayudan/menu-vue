import List from '@mui/material/List';
import User from "./User";

const UsersList = ({ selectedBusiness, setErrors, setBusinessUsers, loggedInUserId, businessUsers, isOwner}) => {

  const handleDeleteClick = (userId) => {
    fetch(`/businesses/${selectedBusiness}/users/${userId}`, { method: "DELETE"})
      .then(res => {
        if (res.ok) {
          setBusinessUsers(businessUsers.filter(filteredUser => filteredUser.id !== userId));
        } else {
          res.json().then(json => setErrors(json.errors))
        }
      })
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