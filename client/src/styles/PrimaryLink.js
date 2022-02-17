import styled from "styled-components";
import { Link } from "react-router-dom";
import { primaryColor } from "../styles/colorList";

const PrimaryLink = styled(Link)`
  color: ${primaryColor};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export default PrimaryLink;