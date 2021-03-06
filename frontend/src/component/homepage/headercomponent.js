import React from 'react';
import { AppBar, Typography, Button, Link,Toolbar } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import RegistrationComponent from '../authcomponent/registrationcomponent';
import LoginComponent from '../authcomponent/logincomponent';
import { connect } from 'react-redux';
import UserMenuComponent from '../user/userMenuComponent';
import StepperUI from '../core/stepper'
import ReastaurantRegistration from '../authcomponent/restaurantOnboarding/restaurantRegistration';


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
        this.state={submit:false,login:false,partnerRegister:false};
    }

    onNavSubmitBarLink=(evt)=>{
      this.setState({submit:true});
    }


    onNavBarLoginLink=(evt)=>{
      this.setState({login:true});
    }

    onNavSubmitBarLinkClose=()=>{
      this.setState({submit:false});
    }


    onNavBarLoginLinkClose=()=>{
      this.setState({login:false});
    }

    onclickpartnerlink = () =>{
      this.setState({partnerRegister:true});
    }

    onclickpartnerlinkClose = () =>{
      this.setState({partnerRegister:false});
    }


    render()
    {
      var generatePopup="";
      if(this.state.submit)
         generatePopup=<RegistrationComponent open={this.state.submit} onRegistrationClose={this.onNavSubmitBarLinkClose}/>
      else if(this.state.login)
          generatePopup=<LoginComponent open={this.state.login} onClose={this.onNavBarLoginLinkClose}/>
      else if(this.state.partnerRegister)
          generatePopup=<ReastaurantRegistration open={this.state.partnerRegister} onClose={this.onclickpartnerlinkClose}/>    
      else
         generatePopup=""

        const {classes}=this.props;
        return (
            
            <div>
            <AppBar position="fixed" 
            style={{ background: '#c51162' }}>
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
         return <UserMenuComponent userName = {this.props.userName}  history={this.props.history}/>;
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

      <Link href="#"
        variant="h6"
        underline="none"
        className={clsx(classes.rightLink, classes.linkSecondary)}
        onClick={this.onclickpartnerlink}
      >
        {'Become a partner'}
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