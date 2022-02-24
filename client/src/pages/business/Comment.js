import React from "react";
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';
import { primaryColor } from "../../styles/colorList";
import styled from "styled-components";
import { useState } from "react";
import DialogTitle from '@mui/material/DialogTitle';
import CommentDialog from "./CommentDialog";

const CommentNumber = styled.span`
  margin-left: 8px;
`;

const StyledCommentIcon = styled(CommentIcon)`
  &:hover {
    color: ${primaryColor};
  }
`;

const StyledDialogTitle = styled(DialogTitle)`
  text-transform: uppercase;
`;

const ItemName = styled.span`
  color: ${primaryColor};
`;

const Comment = ({ item, businessState, appState }) => {

  const { business } = businessState; 

  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCommentClick = () => {
    setLoading(true);
    fetch(`/businesses/${business.id}/menu/categories/${item.category_id}/items/${item.id}/comments`)
      .then(res => {
        setLoading(false);
        if (res.ok) {
          setShowComments(true);
          res.json().then(json => setComments(json));
        }
      })
      .catch(console.error);
  };

  const handleClose = () => {
    setShowComments(false);
  };

  

  return (
    <>
      <IconButton edge="end" aria-label="Comment" onClick={handleCommentClick}>
        <StyledCommentIcon />
      </IconButton>
      <CommentNumber>
        {item.comments}
      </CommentNumber>
      <CommentDialog
        item={item}
        businessState={businessState}
        appState={appState}
        comments={comments}
        setComments={setComments}
        showComments={showComments}
        setShowComments={setShowComments}
      />
    </>
  );
};

export default Comment;