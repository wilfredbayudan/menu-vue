import styled from 'styled-components';
import FloatedContent from '../../styles/FloatedContent';
import PageTitle from '../../styles/PageTitle';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import StyledLoadingButton from "../../styles/StyledLoadingButton";
import ErrorList from "../../components/ErrorList";
import { useNavigate } from "react-router-dom";
import FormInput from "../../styles/FormInput";

const Signup = ({ appState }) => {

  const navigate = useNavigate();

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
        setLoading(false);
        if (res.ok) {
          res.json().then(json => {
            appState.setUser(json);
            navigate('/manage/businesses/new?newUser=true');
          })
        } else {
          res.json().then(json => setErrors(json.errors))
        }
      })
  }

  return (
    <FloatedContent side="right">
      <PageTitle title="Sign up" />
      <form>
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
      </form>
    </FloatedContent>
  )
}

export default Signup;