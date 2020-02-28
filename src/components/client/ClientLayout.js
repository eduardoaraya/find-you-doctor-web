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
  Grid,
  Avatar,
} from '@material-ui/core';
import { Inbox, DoubleArrowOutlined } from '@material-ui/icons';
import authService from '../../services/auth-service';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  main: {
    background: '#FFF',
    padding: '25px',
    minHeight: '500px',
  },
  sideMenu: {
    background: '#FFF',
  },
}));

const menuItens = [
  {
    id: 1,
    text: 'Perfil',
    icon: () => (<Inbox />),
  },
  {
    id: 2,
    text: 'Dashboard',
    icon: () => (<Inbox />),
  },
  {
    id: 3,
    text: 'Alterar senha',
    icon: () => (<Inbox />),
  },
];

export default function ClientLayout({ children }) {
  const [doctor, setDoctor] = useState({
    name: '',
    picture: '',
  });
  const classes = useStyles();

  useEffect(() => {
    authService()
      .getUser()
      .then((user) => {
        setDoctor(user);
      });
  }, []);

  return (
    <>
      <div className={classes.root}>
        <AppBar position="static">
          <Container>
            <Toolbar variant="dense">
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <Avatar src={doctor.picture} />
              </IconButton>
              <Typography variant="h6" color="inherit">
                Dr
                {' '}
                {doctor.name}
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
        <Container style={{ paddingTop: '105px' }}>
          <Grid container spacing={10}>
            <Grid item xs={3}>
              <List className={classes.sideMenu}>
                {menuItens.map((item) => (
                  <ListItem button key={item.id}>
                    <ListItemIcon>
                      {item.icon()}
                    </ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid item xs={8} className={classes.main}>
              {children}
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}
