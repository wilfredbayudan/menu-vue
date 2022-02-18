import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: ${ props => props.side === "right" ? "row-reverse" : "row" };
  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
  }
`;

const Box = styled.section`
  width: 100%;
  height: fit-content;
  background-color: #ffffff;
  padding: 30px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  @media (min-width: 768px) {
    width: ${ props => props.fullWidth ? "100%" : "50%"}
  }
`;

const FloatedContent = props => {

  return (
    <Wrapper side={props.side} fullWidth={props.fullWidth}>
      <Box>
        {props.children}
      </Box>
    </Wrapper>
  );

};

export default FloatedContent;