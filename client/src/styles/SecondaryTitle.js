import styled from "styled-components";
import { primaryColor } from "./colorList";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

const H3 = styled.h3`
  text-transform: uppercase;
  color: ${primaryColor};
`;

const LineBreak = styled.hr`
  border-top: 2px solid #a8a8a8;
  margin-bottom: 20px;
`;

const SecondaryTitleSpan = styled.span`
  color: #000000;
`;

const SecondaryTitle = ({ title, secondaryTitle, sideAction }) => {
  return (
    <>
      <Container>
        <H3>{title} { secondaryTitle ? <>⇢ <SecondaryTitleSpan>{secondaryTitle}</SecondaryTitleSpan></> : '' }</H3>
        { sideAction && sideAction }
      </Container>
      <LineBreak />
    </>
  )
}

export default SecondaryTitle;