import styled from 'styled-components'
import MenuVueLogo from '../assets/images/logo.png'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Link } from "react-router-dom";
import { primaryColor } from "../styles/colorList";

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

const LeftContent = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 30px;
`;

const RightContent = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-right: 10px;
`;

const LoginLink = styled(Link)`
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  color: #1e1e1e;
  transition-property: color;
  transition-duration: 200ms;
  &:hover {
    color: ${primaryColor};
  }
`;

const SignupLink = styled(Link)`
  text-decoration: none;
  background-color: #1a1a1a;
  padding: 7px 10px;
  border-radius: 10px;
  color: #dedede;
  transition-property: background-color, color;
  transition-duration: 200ms;
  &:hover {
    background-color: ${primaryColor};
    color: #1a1a1a;
  }
`;

const Header = () => {

  return (
    <StyledHeader>
      <LeftContent>
        <Logo src={MenuVueLogo} />
        {/* NAV HERE? */}
      </LeftContent>
      <RightContent>
        <LoginLink to="/login">
          <PersonOutlineOutlinedIcon />Log in
        </LoginLink>
        <SignupLink to="/signup">
          Sign up
        </SignupLink>
      </RightContent>
    </StyledHeader>
  )

};

export default Header;