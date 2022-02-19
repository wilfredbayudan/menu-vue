import styled from 'styled-components';
import FloatedContent from '../../styles/FloatedContent';
import PageTitle from '../../styles/PageTitle';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import StyledLoadingButton from "../../styles/StyledLoadingButton";
import ErrorList from "../../components/ErrorList";
import { useNavigate } from "react-router-dom";
import PrimaryLink from "../../styles/PrimaryLink"

const FormInput = styled.div`
  margin-bottom: 10px;
`;

const Login = ({ appState }) => {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
    fetch('/login', {
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
            navigate('/manage');
          })
        } else {
          setFormData({
            ...formData,
            password: ""
          })
          res.json().then(json => setErrors(json.errors))
        }
      })
  }

  return (
    <FloatedContent side="right">
      <PageTitle title="Log in" />
      <form>
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
        <ErrorList errors={errors} />
        <FormInput>
          <StyledLoadingButton type="submit" loading={loading} onClick={handleSubmit}>Register</ StyledLoadingButton>
        </FormInput>
      </form>
      Not registered yet? <PrimaryLink to="/signup">Sign up today!</PrimaryLink>
    </FloatedContent>
  )
}

export default Login;