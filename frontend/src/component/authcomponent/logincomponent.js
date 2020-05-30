import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Dialog from '@material-ui/core/Dialog';
import './auth.css';
import LoaderButton from '../core/button';

class LoginComponent extends React.Component
{

    constructor(props)
    {
        super(props);
        this.state = {
            submitProgress:false,
            open:props.open
        };

    }

    onSigninClick=()=>{
       
        this.setState({
            submitProgress:true
        });
    }
    

    handleClose =()=>
    {
        this.setState({
            open:false
        });
    }


    render()
    {
        return (<Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" open={this.state.open}>
               
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className="paper">
                <Avatar className="avatar">
                <LockOutlinedIcon color="error"/>
                </Avatar>
                <Typography component="h1" variant="h5">
                Sign in
                </Typography>
                <form className="form" noValidate>
                <Grid container spacing = {2}>
                    <Grid item xs={12}>
                    <TextField
                        autoComplete="mobno"
                        name="mobileno"
                        variant="outlined"
                        required
                        fullWidth
                        id="mobileno"
                        label="Mobile No"
                        autoFocus
                    />
                    </Grid>
                    
                    <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    </Grid>
                     
                    
                    </Grid>
                    <Grid container spacing = {2}>
                        <Grid item xs ={12}>
                            <LoaderButton buttontext="Sign In" onClick ={this.onSigninClick} loading ={this.state.submitProgress}/>
                        </Grid>    
                    </Grid>
                <Grid container  spacing ={2}> 
                    <Grid item xs ={6} alignContent="flex-end">
                    <Link href="#" variant="body2"  >
                        Forgot Password?
                    </Link>
                    </Grid>
                    <Grid item xs ={6} alignContent="flex-start">
                    <Link href="#" variant="body2"  >
                        Sign in using OTP?
                    </Link>
                    </Grid>
                </Grid>
                </form>
            </div>
            <Box mt={5}>
                
            </Box>
            </Container>
        </Dialog>
);


    }
}   


export default LoginComponent;