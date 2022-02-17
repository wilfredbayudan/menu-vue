import styled from 'styled-components'

const StyledHeader = styled.header`
  z-index: 2;
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  background-color: #1a1a1a;
`

const Header = () => {

  return (
    <StyledHeader>
      Header
    </StyledHeader>
  )

};

export default Header;