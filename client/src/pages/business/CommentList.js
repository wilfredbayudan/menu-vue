import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import timeAgo from '../../utils/timeAgo';
import Collapse from '@mui/material/Collapse';
import { TransitionGroup } from 'react-transition-group';
import { DeleteForever } from '@mui/icons-material';
import styled from 'styled-components';
import stringAvatar from '../../utils/stringAvatar';

const DeleteIcon = styled(DeleteForever)`
  cursor: pointer;
  &:hover {
    color: #bb3232;
  }
`;

const CommentList = ({ item, commentsDisplay, comments, setComments, businessState, appState }) => {

  const { business } = businessState;

  const handleDelete = (commentId) => {
    console.log(comments.filter(comment => comment.id !== commentId));
    setComments(comments.filter(comment => comment.id !== commentId));
    // fetch(`/businesses/${business.id}/menu/categories/${item.category_id}/items/${item.id}/comments/${commentId}`, {
    //   method: "DELETE"
    // })
    //   .then(res => {
    //     if (res.ok) {
          // console.log(comments)
      //   }
      // })
      // .catch(err => console.log(err));
  }

  const renderComments = commentsDisplay.map(comment => {

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
          {<DeleteIcon onClick={() => handleDelete(comment.id)} />}
        </ListItem>
        <Divider variant="inset" component="li" />
      </React.Fragment>
    )
  })

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {
        comments.length > 0 ? <TransitionGroup>{renderComments}</TransitionGroup> : 'No comments yet, be the first!'
      }
    </List>
  );
}

export default CommentList;