import styled from "styled-components";
import { Link } from "react-router-dom";

const PrimaryLink = styled(Link)`
  color: #ec6c2d;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export default PrimaryLink;