import styled from "styled-components";
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import { useState, useEffect } from "react";

const LikeNumber = styled.span`
  margin-left: 8px;
`;

const LikeItem = ({ item, businessState }) => {

  const [liked, setLiked] = useState(false);

  const { business, setBusiness } = businessState;

  useEffect(() => {
    if (item.liked) {
      setLiked(true);
    } else {
      setLiked(false);
    }
  }, [setLiked, item.liked])

  const handleLikeClick = () => {
    fetch(`/businesses/${business.id}/menu/categories/${item.category_id}/items/${item.id}/likes?likeAction=${liked ? "dislike" : "like"}`,
    { method: "PATCH" })
      .then(res => {
        if (res.ok) {
          res.json().then(json => {
            setLiked(!liked);
            setBusiness({
              ...business,
              menu: {
                ...business.menu,
                items: business.menu.items.map(mappedItem => {
                  if (mappedItem.id !== json.id) return mappedItem;
                  return {
                    ...json,
                    liked: !liked
                  }
                })
              }
            })
          });
        }
      })
      .catch(console.error);
  };

  return (
    <>
      <IconButton edge="end" aria-label="Like" onClick={handleLikeClick}>
        <FavoriteIcon sx={{ color: liked ? "red" : ""}} />
      </IconButton>
      <LikeNumber>
        {item.likes}
      </LikeNumber>
    </>
  );
};

export default LikeItem;