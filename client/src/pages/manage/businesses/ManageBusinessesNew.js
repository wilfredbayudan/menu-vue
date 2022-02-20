import FloatedContent from "../../../styles/FloatedContent";
import PageTitle from "../../../styles/PageTitle";
import ContentNotice from "../../../styles/ContentNotice";
import { useSearchParams } from "react-router-dom";
import TextField from '@mui/material/TextField';
import FormInput from "../../../styles/FormInput";
import { useState } from "react";
import styled from "styled-components";

const FormLabel = styled.label`
  width: 150px;
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

const ResponsiveTextInput = styled(TextField)`
  width: 100%;
  @media (min-width: 768px) {
    width: 500px;
  }
`;

const ManageBusinessesNew = ({ appState }) => {
  
  const { user } = appState;

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: ""
  });

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
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
      <form>
        <FormInput>
            <FormLabel htmlFor="business_name">Business Name</FormLabel>
            <ResponsiveTextInput
              required
              label="Business Name"
              name="name"
              id="business_name"
              variant="filled"
              value={formData.name}
              onChange={handleChange}
            />
        </FormInput>
      </form>
    </FloatedContent>
  );
};

export default ManageBusinessesNew;