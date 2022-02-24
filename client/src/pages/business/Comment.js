import React from "react";
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';
import { primaryColor } from "../../styles/colorList";
import styled from "styled-components";
import { useState } from "react";
import CommentDialog from "./CommentDialog";
import LoaderOverlay from "../../components/LoaderOverlay";

const CommentNumber = styled.span`
  margin-left: 8px;
`;

const StyledCommentIcon = styled(CommentIcon)`
  &:hover {
    color: ${primaryColor};
  }
`;

const Comment = ({ item, businessState, appState }) => {

  const { business } = businessState; 

  const [itemData, setItemData] = useState(null)
  const [showComments, setShowComments] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCommentClick = () => {
    setLoading(true);
    fetch(`/businesses/${business.id}/menu/categories/${item.category_id}/items/${item.id}`)
      .then(res => {
        setLoading(false);
        if (res.ok) {
          setShowComments(true);
          res.json().then(json => setItemData(json));
        }
      })
      .catch(console.error);
  };

  return (
    <>
      <IconButton edge="end" aria-label="Comment" onClick={handleCommentClick}>
        <StyledCommentIcon />
      </IconButton>
      <CommentNumber>
        {item.comments}
      </CommentNumber>
      <LoaderOverlay overlayStatus={loading} />
      <CommentDialog
        item={item}
        businessState={businessState}
        appState={appState}
        itemData={itemData}
        setItemData={setItemData}
        showComments={showComments}
        setShowComments={setShowComments}
      />
    </>
  );
};

export default Comment;