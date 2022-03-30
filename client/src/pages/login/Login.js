import FloatedContent from "../../styles/FloatedContent";
import PageTitle from "../../styles/PageTitle";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import StyledLoadingButton from "../../styles/StyledLoadingButton";
import ErrorList from "../../components/ErrorList";
import { useNavigate } from "react-router-dom";
import PrimaryLink from "../../styles/PrimaryLink";
import FormInput from "../../styles/FormInput";
import ContentNotice from "../../styles/ContentNotice";

const Login = ({ appState }) => {
  const { user, setUser, setAlert } = appState;

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "test@mail.com",
    password: "test1234",
  });
  const [errors, setErrors] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        setLoading(false);
        if (res.ok) {
          res.json().then((json) => {
            setUser(json);
            navigate("/manage/businesses");
          });
        } else {
          setFormData({
            ...formData,
            password: "",
          });
          res.json().then((json) => setErrors(json.errors));
        }
      })
      .catch(() => setAlert({ text: "Something went wrong..." }));
  };

  const checkIfLoggedIn = () => {
    console.log(appState);
  };

  if (user) {
    setTimeout(() => {
      navigate("/manage/businesses");
    }, 500);
    return <>I think you're logged in already...</>;
  }

  return (
    <FloatedContent side="right" onLoad={checkIfLoggedIn}>
      <PageTitle title="Log in" />
      <ContentNotice style={{ marginBottom: "10px" }}>
        <b>Demo Email:</b> test@mail.com
        <br />
        <b>Demo Password</b>: test1234
      </ContentNotice>
      <form onSubmit={handleSubmit}>
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
          <StyledLoadingButton fullWidth type="submit" loading={loading}>
            Log in
          </StyledLoadingButton>
        </FormInput>
      </form>
      Not registered yet? <PrimaryLink to="/signup">Sign up today!</PrimaryLink>
    </FloatedContent>
  );
};

export default Login;
