import styled from "styled-components";
import ResponsiveTextInput from "../../../../styles/ResponsiveTextInput";
import FormInput from "../../../../styles/FormInput"

const Container = styled.div`
  margin-bottom: 15px;
`;

const ItemSearchForm = ({ categoryTitle, search, handleSearchChange }) => {

  return (
    <Container>
      <FormInput>
        <ResponsiveTextInput
        fullWidth
        label={`Search ${categoryTitle}...`}
        name="item"
        variant="filled"
        value={search}
        onChange={handleSearchChange}
        />
      </FormInput>
    </Container>
  );
};

export default ItemSearchForm;