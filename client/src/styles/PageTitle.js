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

const PageTitle = ({ title, secondaryTitle, sideAction }) => {
  return (
    <>
      <Container>
        <H2>{title} { secondaryTitle ? <>⇢ <SecondaryTitle>{secondaryTitle}</SecondaryTitle></> : '' }</H2>
        { sideAction && sideAction }
      </Container>
      <LineBreak />
    </>
  )
}

export default PageTitle;