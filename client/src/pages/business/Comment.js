import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';
import { primaryColor } from "../../styles/colorList";
import styled from "styled-components";
import Dialog from '@mui/material/Dialog';
import { useState } from "react";
import DialogTitle from '@mui/material/DialogTitle';
import LoaderOverlay from "../../components/LoaderOverlay";
import CommentForm from "./CommentForm";
import DialogContent from '@mui/material/DialogContent';

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

const Comment = ({ item, businessState }) => {

  const { business } = businessState; 

  const [comments, setComments] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCommentClick = () => {
    setLoading(true);
    fetch(`/businesses/${business.id}/menu/categories/${item.category_id}/items/${item.id}/comments`)
      .then(res => {
        setLoading(false);
        if (res.ok) {
          setOpen(true);
          res.json().then(json => setComments(json));
        }
      })
      .catch(console.error);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton edge="end" aria-label="Comment" onClick={handleCommentClick}>
        <StyledCommentIcon />
      </IconButton>
      <CommentNumber>
        {item.comments}
      </CommentNumber>
      <LoaderOverlay loaderStatus={loading} />
      <Dialog
        fullWidth
        maxWidth="sm"
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <StyledDialogTitle id="alert-dialog-title"><ItemName>{item.item} ⇢</ItemName> Comments</StyledDialogTitle>
        <DialogContent>
          <CommentForm businessState={businessState} item={item} comments={comments} setComments={setComments} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Comment;