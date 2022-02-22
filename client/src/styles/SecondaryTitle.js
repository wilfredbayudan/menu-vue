import styled from "styled-components";
import { primaryColor } from "./colorList";

const H3 = styled.h3`
  text-transform: uppercase;
  color: ${primaryColor};
`;

const LineBreak = styled.hr`
  border-top: 2px solid #a8a8a8;
  margin-bottom: 20px;
`;

const SecondaryTitle = styled.span`
  color: #000000;
`;

const PageTitle = ({ title, secondaryTitle }) => {
  return (
    <>
      <H3>{title} { secondaryTitle ? <>⇢ <SecondaryTitle>{secondaryTitle}</SecondaryTitle></> : '' }</H3>
      <LineBreak />
    </>
  )
}

export default PageTitle;