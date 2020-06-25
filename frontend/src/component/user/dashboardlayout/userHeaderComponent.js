import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import clsx from 'clsx';


import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import UserNavigationComponent from './userNavigationComponent';


const drawerWidth = 240;

const useStyles = (theme) => ({
  root: {
    display: 'flex',
    direction:'ltr'
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
});

 

class UserHeaderComponent extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={open:false}

    }

    handleNavigationOpen = () => {
        this.setState({open:true});
      };
    
      handleNavigationClose = () => {
        this.setState({open:false})
      };

      

    


    render()
    {
        var classes = this.props.classes    
        return (<div className={classes.root}>
            <CssBaseline />
            <AppBar
              position="fixed"
              className={clsx(classes.appBar, {
                [classes.appBarShift]: this.state.open,
              })}
            >
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={this.handleNavigationOpen}
                  edge="start"
                  className={clsx(classes.menuButton, this.state.open && classes.hide)}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap>
                  Foody
                </Typography>
              </Toolbar>
            </AppBar>
            <UserNavigationComponent open={this.state.open} onClose={this.handleNavigationClose}/>
            <main
              className={clsx(classes.content, {
                [classes.contentShift]: this.state.open,
              })}
            >
              <div className={classes.drawerHeader} />
              <Typography paragraph>
                Hi 1st
              </Typography>
              <Typography paragraph>
                Hi 2nd
              </Typography>
            </main>
          </div>)


    }
}

export default withStyles(useStyles)(UserHeaderComponent);