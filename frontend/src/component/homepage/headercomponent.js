import React from 'react';
import { AppBar, Typography, Button, Link,Toolbar } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';


const useStyles = (theme) => ({
    title: {
      fontSize: 24,
    },
    placeholder: {
        height: 64,
        [theme.breakpoints.up('sm')]: {
          height: 70,
        },
      },
    toolbar: {
      justifyContent: 'space-between',
    },
    left: {
      flex: 1,
      justifyContent: 'flex-start'
      
    },
    leftLinkActive: {
      color: theme.palette.common.white,
    },
    right: {
      flex: 2,
      display: 'flex',
      justifyContent: 'flex-right',
      marginLeft: theme.spacing(110)
    },
    rightLink: {
      fontSize: 16,
      color: theme.palette.common.white
    },
    linkSecondary: {
      
      marginLeft: theme.spacing(5)
    },
  });


class HeaderComponent extends React.Component
{
    constructor(props)
    {
        super(props)

    }

    render()
    {
        const {classes}=this.props;
        return (
            
            <div>
            <AppBar position="fixed">
              <Toolbar className={classes.toolbar}>
                <div className={classes.left} />
                <Link
                  variant="h6"
                  underline="none"
                  color="inherit"
                  className={classes.title}
                >
                  Foody
                </Link>
                <div className={classes.right}>
                  <Link href="/auth/signin"
                    color="inherit"
                    variant="h6"
                    underline="none"
                    className={classes.rightLink}
                  >
                    {'Sign In'}
                  </Link>
                  <Link
                    variant="h6"
                    underline="none"
                    className={clsx(classes.rightLink, classes.linkSecondary)}
                    href="/auth/register"
                  >
                    {'Sign Up'}
                  </Link>
                </div>
              </Toolbar>
            </AppBar>
           
          </div>
        );
      

    }
}

export default withStyles(useStyles)(HeaderComponent);