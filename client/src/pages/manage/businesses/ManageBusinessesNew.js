import FloatedContent from "../../../styles/FloatedContent";
import PageTitle from "../../../styles/PageTitle";
import ContentNotice from "../../../styles/ContentNotice";
import { useSearchParams } from "react-router-dom";
import FormInput from "../../../styles/FormInput";
import { useState } from "react";
import FormLabel from "../../../styles/FormLabel"
import ResponsiveTextInput from "../../../styles/ResponsiveTextInput";
import StyledLoadingButton from "../../../styles/StyledLoadingButton";

const ManageBusinessesNew = ({ appState }) => {
  
  const { user } = appState;

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const [searchParams, setSearchParams] = useSearchParams();

  const newUser = searchParams.get("newUser");

  const renderNewUserNotice = () => {
    if (!newUser) return null;
    return (
      <ContentNotice>
        Hey <b>{user.first_name}</b>, welcome to Menu Vue! To get started, let's create a new business.
      </ContentNotice>
    )
  }

  return (
    <FloatedContent fullWidth>
      {renderNewUserNotice()}
      <PageTitle title="Create a Business" />
      <form onSubmit={handleSubmit}>
        <FormInput>
            <FormLabel htmlFor="business_name">Business Name</FormLabel>
            <ResponsiveTextInput
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
              required
              name="image"
              id="business_image"
              variant="filled"
              value={formData.image}
              onChange={handleChange}
            />
        </FormInput>
        <FormInput>
          <StyledLoadingButton type="submit" loading={loading}>Save</ StyledLoadingButton>
        </FormInput>
      </form>
    </FloatedContent>
  );
};

export default ManageBusinessesNew;