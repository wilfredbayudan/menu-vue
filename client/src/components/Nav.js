import { useState } from "react";
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import styled from "styled-components";
import { primaryColor } from "../styles/colorList";
import { useNavigate } from "react-router-dom"

const NavIcon = styled(MenuIcon)`
  cursor: pointer;
  &:hover {
    color: ${primaryColor};
  }
`;

export default function SwipeableTemporaryDrawer() {
  
  const [showNav, setShowNav] = useState(false);

  const navigate = useNavigate();

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setShowNav(open);
  };

  const list = () => (
    <Box
      sx={{ width: 'auto' }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button onClick={() => navigate("/manage")}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary={"Manage Panel"} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button onClick={() => navigate("/manage/businesses")}>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary={"Businesses"} />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <NavIcon onClick={toggleDrawer(true)} fontSize="large" />
      <SwipeableDrawer
        anchor="top"
        open={showNav}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {list()}
      </SwipeableDrawer>
    </div>
  );
}
