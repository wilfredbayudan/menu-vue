import FloatedContent from '../../styles/FloatedContent';
import PageTitle from '../../styles/PageTitle';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from "react";
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
  const [formErrors, setFormErrors] = useState({
    first_name: null,
    last_name: null,
    email: null,
    password: null,
    password_confirmation: null
  })

  useEffect(() => {
    if (formData.password_confirmation.length === 0) return null;
    if (formData.password !== formData.password_confirmation) {
      setFormErrors(formErrors => {
        return { ...formErrors, password_confirmation: "Passwords do not match." }
      });
    } else {
      setFormErrors(formErrors => {
        return { ...formErrors, password_confirmation: null }
      });
    };

  }, [formData.password, formData.password_confirmation]);

  const formValidate = (inputName, inputValue) => {

    let result = true;
    let regex;
    let errorMessage;

    switch(inputName) {

      case 'first_name':
        regex = /^[a-zA-Z][a-zA-Z ']{0,80}$/
        result = regex.test(inputValue);
        if (!result) {
          errorMessage = 'Please enter a valid first name. Special characters not allowed.';
        }
        break;

      case 'last_name':
        regex = /^[a-zA-Z][a-zA-Z ']{0,80}$/
        result = regex.test(inputValue);
        if (!result) {
          errorMessage = 'Please enter a valid last name. Special characters not allowed.';
        }
        break;

      case 'email':
        regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:)*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:)+)\])/
        result = regex.test(inputValue);
        if (!result) {
          errorMessage = 'Please provide a valid email address.';
        }
        break;

      case 'password':
        regex = /^.{6,25}$/
        result = regex.test(inputValue);
        if (!result) {
          errorMessage = 'Password must be 6-25 characters.';
        }  
        break;

      default:
        result = true;
        break;

    }

    if (!result) {
      setFormErrors({
        ...formErrors,
        [inputName]: errorMessage
      });
    } else {
      setFormErrors({
        ...formErrors,
        [inputName]: null
      })
    };
  };

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    formValidate(e.target.name, e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
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
      <form onSubmit={handleSubmit}>
      <FormInput>
        <TextField
          required
          label="First Name"
          name="first_name"
          variant="filled"
          value={formData.first_name}
          onChange={handleChange}
          helperText={formErrors.first_name}
          error={!!formErrors.first_name}
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
          helperText={formErrors.last_name}
          error={!!formErrors.last_name}
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
          helperText={formErrors.email}
          error={!!formErrors.email}
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
          helperText={formErrors.password}
          error={!!formErrors.password}
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
          helperText={formErrors.password_confirmation}
          error={!!formErrors.password_confirmation}
          fullWidth
        />
      </FormInput>
      <ErrorList errors={errors} />
      <StyledLoadingButton fullWidth type="submit" loading={loading}>Register</ StyledLoadingButton>
      </form>
    </FloatedContent>
  )
}

export default Signup;