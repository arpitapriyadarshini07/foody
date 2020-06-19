import React from 'react'; 

import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import { Avatar, Typography } from '@material-ui/core';
import { signOutUser } from '../../store/actions/authentication';
import { connect } from 'react-redux';

const StyledMenu = withStyles({
    paper: {
      border: '1px solid #d3d4d5',
    },
  })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
    />
  ));
  
  const StyledMenuItem = withStyles((theme) => ({
    root: {
      '&:focus': {
        backgroundColor: theme.palette.primary.main,
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
          color: theme.palette.common.white,
        },
      },
    },
  }))(MenuItem);
  

class UserMenuComponent extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {anchorEl:null}

    }

    handleClick = (event) => {
        this.setState({anchorEl:event.currentTarget});
      };
    
      handleClose = () => {
        this.setState({anchorEl:null});
      };

    render()
    {
        return (
            <React.Fragment>
              <Avatar alt="User" onClick={this.handleClick}>
              {this.props.userName.charAt(0)}
              </Avatar>
              <Typography>
                  {this.props.userName}
             </Typography>
          
              <StyledMenu
                id="customized-menu"
                anchorEl={this.state.anchorEl}
                keepMounted
                open={Boolean(this.state.anchorEl)}
                onClose={this.handleClose}
              >
                <StyledMenuItem>
                  <ListItemIcon>
                    <SendIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Profile" />
                </StyledMenuItem>
                <StyledMenuItem>
                  <ListItemIcon>
                    <DraftsIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Notifications" />
                </StyledMenuItem>
                <StyledMenuItem>
                  <ListItemIcon>
                    <DraftsIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Reviews" />
                </StyledMenuItem>
                <StyledMenuItem onClick ={(event)=>{this.props.signoutuser()}} >
                  <ListItemIcon>
                    <InboxIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Logout" />
                </StyledMenuItem>
              </StyledMenu>
              </React.Fragment>
          ); 


    }

}
    
export default connect(null,{signoutuser:signOutUser})(UserMenuComponent);