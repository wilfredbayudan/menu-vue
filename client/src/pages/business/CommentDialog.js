import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import styled from 'styled-components';
import { primaryColor } from "../../styles/colorList";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";

const ItemName = styled.span`
  color: ${primaryColor};
`;

const StyledDialogTitle = styled(DialogTitle)`
  text-transform: uppercase;
`;

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const CommentDialog = ({ itemData, setItemData, showComments, setShowComments, businessState, appState }) => {

  
  const handleClose = () => {
    setShowComments(false);
  };

  if (!itemData) return null;

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
          <ItemName>{itemData.item} ⇢</ItemName> Comments
        </StyledDialogTitle>
        <DialogContent>
          <CommentForm itemData={itemData} setItemData={setItemData} businessState={businessState} />  
          <CommentList itemData={itemData} setItemData={setItemData} businessState={businessState} appState={appState} />         
        </DialogContent>
      </Dialog>
  );
}

export default CommentDialog;