import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import timeAgo from '../../utils/timeAgo';
import { DeleteForever } from '@mui/icons-material';
import styled from 'styled-components';
import stringAvatar from '../../utils/stringAvatar';

const DeleteIcon = styled(DeleteForever)`
  cursor: pointer;
  &:hover {
    color: #bb3232;
  }
`;

const CommentList = ({ itemData, setItemData, businessState, appState }) => {

  const { business, setBusiness } = businessState;
  const { user } = appState;

  console.log(business)

  const handleDelete = (commentId) => {
    fetch(`/businesses/${business.id}/menu/categories/${itemData.category_id}/items/${itemData.id}/comments/${commentId}`, {
      method: "DELETE"
    })
      .then(res => {
        if (res.ok) {
          setItemData({
            ...itemData,
            comments: itemData.comments.filter(comment => comment.id !== commentId)
          })
          setBusiness({
            ...business,
            menu: {
              ...business.menu,
              items: business.menu.items.map(mappedItem => {
                if (mappedItem.id !== itemData.id) return mappedItem;
                return {
                  ...mappedItem,
                  comments: mappedItem.comments - 1
                }
              })
            }
          })
        }
      })
      .catch(err => console.log(err));
  }

  const validateAccess = () => {
    if (business && user) {
      if (user.businesses.find(userBusiness => userBusiness.business_id === business.id)) {
        return true;
      }
    }
    return false;
  }

  const hasAccess = validateAccess();

  const renderComments = itemData.comments.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)).map(comment => {

    const commentAuthor = comment.author || 'Anonymous';

    return (
      <React.Fragment key={comment.id}>
        <ListItem alignItems="flex-start" key={comment.id}>
          <ListItemAvatar>
            <Avatar {...stringAvatar(commentAuthor)} />
          </ListItemAvatar>
          <ListItemText
            primary={comment.comment}
            secondary={`Posted ${timeAgo(comment.created_at)} by ${commentAuthor}`}
          />
          {comment.isAuthor || hasAccess ? <DeleteIcon onClick={() => handleDelete(comment.id)} /> : ""}
        </ListItem>
        <Divider variant="inset" component="li" />
      </React.Fragment>
    )
  })

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {
        itemData.comments.length > 0 ? renderComments : 'No comments yet, be the first!'
      }
    </List>
  );
}

export default CommentList;