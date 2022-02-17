import styled from "styled-components";

const H2 = styled.h2`
  text-transform: uppercase;
`;

const PageTitle = ({ title }) => {
  return (
    <>
      <H2>{title}</H2>
      <hr />
    </>
  )
}

export default PageTitle;