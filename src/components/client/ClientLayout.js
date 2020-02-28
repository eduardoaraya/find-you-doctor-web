import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Typography,
  IconButton,
  Container,
  Toolbar,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import authService from '../../services/auth-service';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const menuItens = [
  {
    id: 1,
    text: 'Perfil',
    icon: () => (<InboxIcon />),
  },
  {
    id: 2,
    text: 'Dashboard',
    icon: () => (<InboxIcon />),
  },
  {
    id: 3,
    text: 'Alterar senha',
    icon: () => (<InboxIcon />),
  },
];

export default function ClientLayout({ children }) {
  const [doctorName, setDoctorName] = useState('...');
  const classes = useStyles();

  useEffect(() => {
    authService()
      .getUser()
      .then((user) => {
        const { name } = user;
        setDoctorName(name);
      });
  });

  return (
    <>
      <div className={classes.root}>
        <AppBar position="static">
          <Container>
            <Toolbar variant="dense">
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit">
                Dr
                {' '}
                {doctorName}
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
        <Container style={{ paddingTop: '105px' }}>
          <List>
            {menuItens.map((item) => (
              <ListItem button key={item.id}>
                <ListItemIcon>
                  {item.icon()}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
          {children}
        </Container>
      </div>
    </>
  );
}
