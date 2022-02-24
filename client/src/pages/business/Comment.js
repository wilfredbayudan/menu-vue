import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';
import { primaryColor } from "../../styles/colorList";
import styled from "styled-components";

const CommentNumber = styled.span`
  margin-left: 5px;
`;

const StyledCommentIcon = styled(CommentIcon)`
  &:hover {
    color: ${primaryColor};
  }
`;

const Comment = ({ item, businessState }) => {

  const handleCommentClick = () => {
    console.log(item);
  }

  return (
    <>
      <IconButton edge="end" aria-label="Comment" onClick={handleCommentClick}>
        <StyledCommentIcon />
      </IconButton>
      <CommentNumber>
        {item.comments}
      </CommentNumber>
    </>
  )
}

export default Comment;