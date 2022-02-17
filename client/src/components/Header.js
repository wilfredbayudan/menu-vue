import styled from 'styled-components'
import MenuVueLogo from '../assets/images/logo.png'

const StyledHeader = styled.header`
  z-index: 2;
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
`

const Logo = styled.img`
  height: 100%;
  cursor: pointer;
`

const Header = () => {

  return (
    <StyledHeader>
      <Logo src={MenuVueLogo} />
      <div>Nav Stuff</div>
    </StyledHeader>
  )

};

export default Header;