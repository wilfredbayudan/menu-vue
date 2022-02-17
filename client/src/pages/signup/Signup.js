import styled from 'styled-components';
import FloatedContent from '../../styles/FloatedContent';
import PageTitle from '../../styles/PageTitle';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import StyledLoadingButton from "../../styles/StyledLoadingButton";
import ErrorList from "../../components/ErrorList";

const FormInput = styled.div`
  margin-bottom: 10px;
`;

const Signup = () => {

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const [errors, setErrors] = useState([]);

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = () => {
    setLoading(true);
    fetch('/signup', {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(res => {
        if (res.ok) {

        } else {
          res.json().then(json => setErrors(json.errors))
        }
        setLoading(false);
      })
  }

  return (
    <FloatedContent side="right">
      <PageTitle title="Sign up" />
      <FormInput>
        <TextField
          required
          label="First Name"
          name="first_name"
          variant="filled"
          value={formData.first_name}
          onChange={handleChange}
          fullWidth
        />
      </FormInput>
      <FormInput>
        <TextField
          required
          label="Last Name"
          name="last_name"
          variant="filled"
          value={formData.last_name}
          onChange={handleChange}
          fullWidth
        />
      </FormInput>
      <FormInput>
        <TextField
          required
          label="Email Address"
          name="email"
          variant="filled"
          value={formData.email}
          onChange={handleChange}
          fullWidth
        />
      </FormInput>
      <FormInput>
        <TextField
          required
          label="Password"
          name="password"
          variant="filled"
          type="password"
          value={formData.password}
          onChange={handleChange}
          fullWidth
        />
      </FormInput>
      <FormInput>
        <TextField
          required
          label="Confirm Password"
          name="password_confirmation"
          variant="filled"
          type="password"
          value={formData.password_confirmation}
          onChange={handleChange}
          fullWidth
        />
      </FormInput>
      <ErrorList errors={errors} />
      <StyledLoadingButton type="submit" loading={loading} onClick={handleSubmit}>Register</ StyledLoadingButton>
    </FloatedContent>
  )
}

export default Signup;