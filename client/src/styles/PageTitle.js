import styled from "styled-components";
import { primaryColor } from "./colorList";

const H2 = styled.h2`
  text-transform: uppercase;
`;

const LineBreak = styled.hr`
  border-top: 4px solid #606060;
  margin-bottom: 20px;
`;

const SecondaryTitle = styled.span`
  color: ${primaryColor};
`;

const PageTitle = ({ title, secondaryTitle }) => {
  return (
    <>
      <H2>{title} { secondaryTitle ? <>⇢ <SecondaryTitle>{secondaryTitle}</SecondaryTitle></> : '' }</H2>
      <LineBreak />
    </>
  )
}

export default PageTitle;