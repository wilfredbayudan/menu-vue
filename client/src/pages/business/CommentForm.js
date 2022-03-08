import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { TextField } from '@mui/material';
import { Divider } from '@mui/material';
import StyledLoadingButton from "../../styles/StyledLoadingButton";

const Form = styled.form`

`;

const FormAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 10px;
`; 

const CommentForm = ({ itemData, setItemData, businessState }) => {

  const { business, setBusiness } = businessState;

  const [formData, setFormData] = useState({
    author: '',
    comment: ''
  });

  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [postSuccess, setPostSuccess] = useState(false);

  useEffect(() => {
    if (postSuccess) {
      setTimeout(() => {
        setPostSuccess(false);
      }, 3000)
    }
  }, [postSuccess, setPostSuccess]);

  useEffect(() => {
    if (formData.comment.trim().length > 2) {
      setDisabled(false);
      setPostSuccess(false);
    } else {
      setDisabled(true);
    }
  }, [setDisabled, formData.comment])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch(`/businesses/${business.id}/menu/categories/${itemData.category_id}/items/${itemData.id}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(json => {
        setLoading(false);
        setPostSuccess(true);
        setFormData({
          ...formData,
          comment: ''
        });
        const newComment = {
          ...json,
          isAuthor: true
        };
        setItemData({
          ...itemData,
          comments: [
            ...itemData.comments,
            newComment
          ]
        })
        setBusiness({
          ...business,
          menu: {
            ...business.menu,
            items: business.menu.items.map(mappedItem => {
              if (mappedItem.id !== itemData.id) return mappedItem;
              return {
                ...mappedItem,
                comments: mappedItem.comments + 1
              }
            })
          }
        })
      })
      .catch(err => console.log(err))
  }

  return (
    <Form onSubmit={handleSubmit}>
      <TextField
        autoFocus
        margin="dense"
        id="author"
        label="Your Name"
        name="author"
        size="small"
        fullWidth
        variant="filled"
        onChange={handleChange}
        value={formData.author}
      />
      <TextField
        margin="dense"
        multiline
        size="small"
        rows={3}
        id="comment"
        label="Comment"
        name="comment"
        fullWidth
        variant="filled"
        onChange={handleChange}
        value={formData.comment}
        required
      />
      <FormAction>
        <StyledLoadingButton type="submit" loading={loading} disabled={disabled}>
        {postSuccess ? "Comment posted!" : 'Post'}
        </StyledLoadingButton>
      </FormAction>
      <Divider />
    </Form>    
  )
}

export default CommentForm;