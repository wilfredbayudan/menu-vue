import FloatedContent from "../../../styles/FloatedContent";
import PageTitle from "../../../styles/PageTitle";
import ContentNotice from "../../../styles/ContentNotice";
import { useSearchParams, useNavigate } from "react-router-dom";
import FormInput from "../../../styles/FormInput";
import { useState } from "react";
import FormLabel from "../../../styles/FormLabel";
import ResponsiveTextInput from "../../../styles/ResponsiveTextInput";
import StyledLoadingButton from "../../../styles/StyledLoadingButton";
import ErrorList from "../../../components/ErrorList";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../../store/userSlice";

const ManageBusinessesNew = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);

  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const newUser = searchParams.get("newUser");

  const { user } = userState;

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: "",
  });

  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/businesses", {
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
            dispatch(
              login({
                ...user,
                businesses: [
                  ...user.businesses,
                  {
                    business_id: json.id,
                    name: json.name,
                    owner: true,
                    slug: json.slug,
                  },
                ],
              })
            );
            navigate(
              `/manage/businesses/${json.id}/menu${
                newUser ? "?newUser=true" : ""
              }`
            );
          });
        } else {
          res.json().then((json) => setErrors(json.errors));
        }
      })
      .catch(console.error);
  };

  const renderNewUserNotice = () => {
    if (!newUser) return null;
    return (
      <ContentNotice>
        Hey <b>{user.first_name}</b>, welcome to Menu Vue! To get started, let's
        create a new business.
      </ContentNotice>
    );
  };

  return (
    <FloatedContent fullWidth>
      {renderNewUserNotice()}
      <PageTitle title="Create a Business" />
      <form onSubmit={handleSubmit}>
        <FormInput>
          <FormLabel htmlFor="business_name">Business Name</FormLabel>
          <ResponsiveTextInput
            autoFocus
            required
            name="name"
            id="business_name"
            variant="filled"
            value={formData.name}
            onChange={handleChange}
          />
        </FormInput>
        <FormInput>
          <FormLabel htmlFor="business_description">Description</FormLabel>
          <ResponsiveTextInput
            name="description"
            multiline
            rows="4"
            id="business_description"
            variant="filled"
            value={formData.description}
            onChange={handleChange}
          />
        </FormInput>
        <FormInput>
          <FormLabel htmlFor="business_image">Image URL</FormLabel>
          <ResponsiveTextInput
            name="image"
            id="business_image"
            variant="filled"
            value={formData.image}
            onChange={handleChange}
          />
        </FormInput>
        <ErrorList errors={errors} />
        <StyledLoadingButton type="submit" loading={loading}>
          Save
        </StyledLoadingButton>
      </form>
    </FloatedContent>
  );
};

export default ManageBusinessesNew;
