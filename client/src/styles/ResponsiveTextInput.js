import styled from "styled-components";
import TextField from '@mui/material/TextField';

const ResponsiveTextInput = styled(TextField)`
  width: 100%;
  @media (min-width: 768px) {
    width: 500px;
  }
`;

export default ResponsiveTextInput;