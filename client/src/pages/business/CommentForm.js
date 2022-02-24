import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ResponsiveTextInput from "../../styles/ResponsiveTextInput";
import StyledLoadingButton from "../../styles/StyledLoadingButton";
import { Divider, TextField } from '@mui/material';

const Form = styled.form`

`;

const FormAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 10px;
`; 

const CommentForm = ({ comments, setComments, item, businessState }) => {

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
      }, 5000)
    }
  }, [postSuccess, setPostSuccess]);

  useEffect(() => {
    if (formData.comment.trim().length > 2) {
      setDisabled(false);
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
    fetch(`/businesses/${business.id}/menu/categories/${item.category_id}/items/${item.id}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(res => {
        if (res.ok) {
          setLoading(false);
          res.json().then(json => {
            setPostSuccess(true);
            setFormData({
              author: json.author,
              comment: ""
            })
            setComments([
              ...comments,
              json
            ])
            console.log(json);
          })
        }
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
        value={formData.created_by}
        required
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
        <span>{postSuccess ? "Your comment has been posted!" : ''}</span>
        <StyledLoadingButton loading={loading} disabled={disabled} type="submit">Post</StyledLoadingButton>
      </FormAction>
      <Divider />
    </Form>    
  )
}

export default CommentForm;