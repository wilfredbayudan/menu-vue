import styled from 'styled-components';
import PrimaryLink from '../styles/PrimaryLink';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import RoomIcon from '@mui/icons-material/Room';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { useParams } from "react-router-dom";
import { primaryColor } from "../styles/colorList";

const StyledFooter = styled.footer`
  flex-shrink: 0;
  color: #878787;
`
const FullBar = styled.div`
  background: rgba(26, 26, 26, 0.9);
  padding: 25px;
  display: none;
  @media (min-width: 768px) {
    display: ${ props => props.display === "true" ? "flex" : "none" };
  }
`;

const LeftContent = styled.div`
  width: 50%;
`;

const RightContent = styled.div`
  width: 50%;
`;

const Heading = styled.h2`
  color: #c0c0c0;
  font-size: 1.4em;
  margin: 0 0 10px 0;
  padding: 0;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`

const ListItem = styled.li`
  display: ${ props => props.inline ? 'inline-flex' : 'flex' };
  align-items: center;
  margin-right: 10px;
  margin-bottom: 6px;
`;

const StyledLink = styled.a`
  color: #878787;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  &:hover {
    color: ${primaryColor};
  }
`;

const Span = styled.span`
`;

const BottomBar = styled.div`
  background-color: #000000;
  color: #4d4d4d;
  padding: 15px 25px;
  font-size: 0.9em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Copyright = styled.div`
  margin: 0 auto;
  @media (min-width: 768px) {
    margin: 0;
  }
`;

const PolicyLinks = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

const Footer = () => {

  const params = useParams();

  let fullBarDisplay = "true";

  if (params.slugUrl) {
    fullBarDisplay = "false";
  }
  
  return (
    <StyledFooter>
      <FullBar display={fullBarDisplay}>
        <LeftContent>
          <Heading>FIND US ON SOCIAL MEDIA</Heading>
          <List>
            <ListItem inline>
              <StyledLink>
                <FacebookIcon fontSize="large" />
              </StyledLink>
            </ListItem>
            <ListItem inline>
              <StyledLink>
                <InstagramIcon fontSize="large" />
              </StyledLink>
            </ListItem>
            <ListItem inline>
              <StyledLink>
                <TwitterIcon fontSize="large" />
              </StyledLink>
            </ListItem>
            <ListItem inline>
              <StyledLink>
                <LinkedInIcon fontSize="large" />
              </StyledLink>
            </ListItem>
          </List>
        </LeftContent>
        <RightContent>
          <Heading>GET IN TOUCH</Heading>
          <List>
            <ListItem>
              <StyledLink>
                <RoomIcon /> <Span>366 Columbus Ave, New York, NY 10024</Span>
              </StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink>
                <PhoneInTalkIcon /> <Span>+1 (555) 555-9876</Span>
              </StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink>
                <MailOutlineIcon /> <Span>info@menuvue.com</Span>
              </StyledLink>
            </ListItem>
          </List>
        </RightContent>
      </FullBar>
      <BottomBar>
        <Copyright>
          Copyright&copy; 2022 Menu Vue, Inc.
        </Copyright>
        <PolicyLinks>
          <PrimaryLink to="/">Terms of Service</PrimaryLink> | <PrimaryLink to="/">Privacy Policy</PrimaryLink>
        </PolicyLinks>
      </BottomBar>
    </StyledFooter>
  )

};

export default Footer;