import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import styled from 'styled-components';
import { primaryColor } from "../../styles/colorList";
import CommentForm from "./CommentForm"

const ItemName = styled.span`
  color: ${primaryColor};
`;

const StyledDialogTitle = styled(DialogTitle)`
  text-transform: uppercase;
`;

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CommentDialog = ({item, comments, setComments, showComments, setShowComments, businessState, appState }) => {

  const handleClose = () => {
    setShowComments(false);
  };

  return (
      <Dialog
        open={showComments}
        onClose={handleClose}
        aria-describedby="alert-dialog-description"
        TransitionComponent={Transition}
        keepMounted
        scroll="paper"
        fullWidth
        maxWidth="sm"
      >
        <StyledDialogTitle>
          <ItemName>{item.item} ⇢</ItemName> Comments
        </StyledDialogTitle>
        <DialogContent>
          <CommentForm item={item} comments={comments} setComments={setComments} businessState={businessState} />          
        </DialogContent>
      </Dialog>
  );
}

export default CommentDialog;