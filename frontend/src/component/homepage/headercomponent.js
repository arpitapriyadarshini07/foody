import React from 'react';
import { AppBar, Typography, Button, Link,Toolbar } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import RegistrationComponent from '../authcomponent/registrationcomponent';
import LoginComponent from '../authcomponent/logincomponent';
import { connect } from 'react-redux';
import UserMenuComponent from '../user/userMenuComponent';


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
        super(props);
        this.state={submit:false,login:false};
    }

    onNavSubmitBarLink=(evt)=>{
      this.setState({submit:false});
      this.setState({submit:true});
    console.log(this.state);
    }


    onNavBarLoginLink=(evt)=>{
      this.setState({login:false})
      this.setState({login:true});
    console.log(this.state);
    }

    

    render()
    {
      var generatePopup="";
      if(this.state.submit)
         generatePopup=<RegistrationComponent open={true}/>
      else if(this.state.login)
          generatePopup=<LoginComponent open={true}/>
      else
         generatePopup=""

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
                
                {this.getAuthComponent(classes)}
                </div>
              </Toolbar>
            </AppBar>
            <React.Fragment>
            {generatePopup}
            </React.Fragment>
             
          </div>
        );
      

    }
    getAuthComponent=(classes)=>{
      if (this.props.userName!="")
      {
         return <UserMenuComponent userName = {this.props.userName}/>;
      }else
      {
      return (
        <React.Fragment>
      <Link href="#"
        color="inherit"
        variant="h6"
        underline="none"
        className={classes.rightLink}
        onClick={this.onNavBarLoginLink}
      >
        {'Sign In'}
      </Link>
      <Link href="#"
        variant="h6"
        underline="none"
        className={clsx(classes.rightLink, classes.linkSecondary)}
        onClick={this.onNavSubmitBarLink}
      >
        {'Sign Up'}
      </Link>
      </React.Fragment>

      )
    }
    }
  }

const mapStateToProps = (state) =>{
  return {
     userName:state.userName
  };
}

export default connect(mapStateToProps,null)(withStyles(useStyles)(HeaderComponent));