import styled from "styled-components";

const H2 = styled.h2`
  text-transform: uppercase;
`;

const LineBreak = styled.hr`
  border-top: 4px solid #606060;
  margin-bottom: 20px;
`;

const PageTitle = ({ title }) => {
  return (
    <>
      <H2>{title}</H2>
      <LineBreak />
    </>
  )
}

export default PageTitle;