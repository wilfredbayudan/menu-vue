import styled from 'styled-components'
import MenuVueLogo from '../assets/images/logo.png'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Link, useNavigate } from "react-router-dom";
import { primaryColor } from "../styles/colorList";
import LogoutIcon from '@mui/icons-material/Logout';
import Nav from "./Nav";

const StyledHeader = styled.header`
  z-index: 12;
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

const blackBtn = `
  text-decoration: none;
  background-color: #1a1a1a;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 7px 10px;
  border-radius: 10px;
  color: #dedede;
  transition-property: background-color, color;
  transition-duration: 200ms;
  border: none;
  font-size: 1em;
  cursor: pointer;
  &:hover {
    background-color: ${primaryColor};
    color: #1a1a1a;
  }
`;

const SignupLink = styled(Link)`
  ${blackBtn}
`;

const LogoutButton = styled.button`
  ${blackBtn}
`;

const LogInOutText = styled.span`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

const Header = ({ appState }) => {

  const navigate = useNavigate(); 

  const handleLogoutClick = () => {
    fetch('/logout', { method: "DELETE" })
      .then(res => {
        if (res.ok) {
          appState.setUser(null);
          navigate("/login");
        }
      })
  }

  return (
    <StyledHeader>
      <LeftContent>
        <Logo src={MenuVueLogo} onClick={() => navigate('/')} />
      </LeftContent>
      <RightContent>
        {
          appState.user ? 
          <LogoutButton onClick={handleLogoutClick}><LogoutIcon /><LogInOutText>Log out</LogInOutText></LogoutButton>
          :
          <>
            <LoginLink to="/login">
              <PersonOutlineOutlinedIcon /><LogInOutText>Log in</LogInOutText>
            </LoginLink>
            <SignupLink to="/signup">
              Sign up
            </SignupLink>
          </>
        }
        <Nav appState={appState} handleLogoutClick={handleLogoutClick} />
      </RightContent>
    </StyledHeader>
  )

};

export default Header;