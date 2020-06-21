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
import {
    Formik
  } from 'formik';
import * as Yup from 'yup';
import { onSignIn } from '../../server/auth/authservice';
import { saveUserName } from '../../store/actions/authentication';
import { connect } from 'react-redux';
import { setCookie } from '../../common/util/cookieutil';
import commonConstants from '../../common/constants/commonConstants';
import Alert from '@material-ui/lab/Alert';


class LoginComponent extends React.Component
{

    constructor(props)
    {
        super(props);
        this.state = {
            submitProgress:false,
            errorMessage : ""
        };

    }

    getFormFields()
    {
         return {emailId: "",password: "" }; 
    }

    validationSchema()  {
        return Yup.object().shape({
            emailId: Yup.string()
            //   .email('Please provide valid Email Id Or Mobile')
              .required('Please provide valid email id or mobile no'),
              password:Yup.string()
              .required('Password is Manadatory')
            }
            )
        }
    
    onSubmit= async (values, { setSubmitting })=>{
        this.setState({submitProgress:true,errorMessage:""});

        var response=await onSignIn(values);
        if (response.isError)
        {
            this.setState({errorMessage:response.errorMessage.error,submitProgress:false})
        }
        else{
        setCookie(commonConstants.USER_COOKIE_KEY,{userName:response.data.name,authToken:response.data.token})
        
        this.props.signinuser(response.data.name);
        this.setState({
            submitProgress:false
        }); 
        this.props.onClose();
      }
    }

    handleClose =()=>
    {
        this.props.onClose();
    }

    render()
    {
        return (<Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" open={this.props.open}>

         <Formik   
            initialValues={this.getFormFields()}
            validationSchema={this.validationSchema()}
            onSubmit={this.onSubmit}
            >

        {(formikRef) => {
            
                  const {
                    values,
                    touched,
                    errors,
                    dirty,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    handleReset
                  } = formikRef;
      return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className="paper">
                <Avatar className="avatar">
                <LockOutlinedIcon color="error"/>
                </Avatar>
                <Typography component="h1" variant="h5">
                Sign in
                </Typography>
                <form className="form" noValidate  onSubmit={handleSubmit}>
                <Grid container spacing = {2}>
                    <Grid item xs={12}>
                    <TextField 
                                variant="outlined"
                                required
                                fullWidth
                                id="emailId"
                                label="Email / Mobile"
                                name="emailId"
                                autoComplete="emailId"
                                error={errors.emailId && touched.emailId}
                                value={values.emailId}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                helperText={(errors.emailId && touched.emailId) && errors.emailId}
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
                                error={errors.password && touched.password}
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                helperText={(errors.password && touched.password) && errors.password}
                            />
                    </Grid>
                     
                    
                    </Grid>
                    <Grid container spacing = {2}>
                        <Grid item xs ={12}>
                            <LoaderButton buttontext="Sign In"  loading ={this.state.submitProgress}/>
                        </Grid>    
                    </Grid>

                </form>
            
                <Grid container spacing = {2}>
                        <Grid item xs ={12}>
                        {Boolean(this.state.errorMessage)?<Alert severity="error">{this.state.errorMessage}</Alert>:""}
                        </Grid>    
                    </Grid>
            </div>
            <Box mt={5}>
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
            </Box>
            </Container>
            
            )
         }}

            </Formik>
        </Dialog>
);


    }
}   


export default connect(null,{signinuser:saveUserName})(LoginComponent);