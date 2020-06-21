import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Dialog from '@material-ui/core/Dialog';
import './auth.css';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import countries from '../../common/constants/countryConstants'
import LoaderButton from '../core/button';
import { onRegistration } from '../../server/auth/authservice';
import {
    Formik
  } from 'formik';
import * as Yup from 'yup';

function countryToFlag(isoCode) {
    return typeof String.fromCodePoint !== 'undefined'
      ? isoCode
          .toUpperCase()
          .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
      : isoCode;
  }
  
  function countryFunction(option) {
    return typeof String.fromCodePoint !== 'undefined'
      ? option.code
          .toUpperCase()
          .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))+ option.label+ ' ('+option.code+') +'+option.phone
      : option.code;
  }
  


class RegistrationComponent extends React.Component
{

    constructor(props)
    {
        super(props);
        this.state = {
            submitProgress:false,
            
            country: "",
            dialCode: ""
        };

    }

    getFormFields()
    {
         return {firstName: "",lastName: "",mobno: "",country: "",dialCode: "",gender: "",emailId: "",password: "" }; 
    }

    validationSchema()  {
        return Yup.object().shape({
            emailId: Yup.string()
              .email('Please provide valid Email')
              .required('Email is mandatory'),
              firstName: Yup.string()
              .required('First Name is Mandatory'),
              password:Yup.string()
              .required('Password is Manadatory').matches("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})", { message:"Password should contain 8 digit alphanumeric (should contains atleast one letter,one number,one symbol)",excludeEmptyString: true }),
              mobno:Yup.number().required('Mobile No is Mandatory').min(6000000000,"Please enter valid mobile number").max(10000000000,"Please enter valid mobile number")
            }
            )
        }
    
    onSubmit= async (values, { setSubmitting })=>{
        console.log(values)
        this.setState({submitProgress:true});
        values.country=this.state.country;
        values.dialCode=this.state.dialCode;
        console.log(this.state);
        await onRegistration(values);
        this.setState({
            submitProgress:false
        }); 
        this.props.onRegistrationClose();
    }

    handleClose =()=>
    {
        this.props.onRegistrationClose();
    }

    render()
    {

        return (
            <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" open={this.props.open}>
               
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
                        Sign up
                        </Typography>
                       
                        <form className="form" noValidate onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus   
                                error={errors.firstName && touched.firstName}
                                value={values.firstName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                helperText={(errors.firstName && touched.firstName) && errors.firstName}
                            />
                            </Grid>
                            
                            <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"    
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="lname"
                                error={errors.lastName && touched.lastName}
                                value={values.lastName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                helperText={(errors.lastName && touched.lastName) && errors.lastName}
                            />
                            </Grid>

                            <Grid item xs={12}>
                                <Autocomplete onChange = {(evt,value,reason) =>{this.setState({country:value.code,dialCode:value.phone})}}

                                    
                                id="country"
                                name="country"
                                options={countries}
                                classes={{
                                    option: "option",
                                }}
                                autoHighlight
                                getOptionLabel={(option) =>countryFunction(option)}   
                                renderOption={(option) => (
                                    <React.Fragment>
                                    <span>{countryToFlag(option.code)}</span>
                                    {option.label} ({option.code}) +{option.phone}
                                    </React.Fragment>
                                    
                                )}
                                renderInput={(params) => (
                                    <TextField 
                                    
                                    {...params}
                                    label="Choose a country"
                                    variant="outlined"
                                    inputProps={{
                                        ...params.inputProps,
                                        autoComplete: 'new-password', // disable autocomplete and autofill
                                    }}
                                    />
                                )}
                                />
                            </Grid>


                            <Grid item xs={12}>
                            <TextField
                                autoComplete="mobno"
                                name="mobno"
                                variant="outlined"
                                required
                                fullWidth
                                id="mobno"
                                label="Mobile No"
                                error={errors.mobno && touched.mobno}
                                value={values.mobimobnoleno}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                helperText={(errors.mobno && touched.mobno) && errors.mobno}
                            />
                            </Grid>
                            <Grid item xs={12}>
                            <TextField 
                                variant="outlined"
                                required
                                fullWidth
                                id="emailId"
                                label="Email Address"
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
                             <Grid item xs={12}>       
                                <FormControl component="fieldset">
                                <FormLabel component="legend">Gender</FormLabel>
                                <RadioGroup  row aria-label="gender" name="gender" onChange={handleChange} onBlur={handleBlur} value={values.gender}>
                                
                                    <FormControlLabel value="female" control={<Radio/>} label="Female" />
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    <FormControlLabel value="other" control={<Radio />} label="Other" />   
                                </RadioGroup>
                                </FormControl>
                            
                            </Grid>
                            

                            <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="I want to receive inspiration, marketing promotions and updates via email."
                            />
                            </Grid>
                        </Grid>
                     
                        <LoaderButton buttontext="Sign Up" loading ={this.state.submitProgress}/>
                        
                        <Grid container justify="flex-end">
                            <Grid item>
                            <Link href="/auth/signin" variant="body2">
                                Already have an account? Sign in
                            </Link>
                            </Grid>
                        </Grid>
                        </form>
                    </div>
                    </Container>
              
                    )
                }}
        
          
           </Formik>
         </Dialog>
    );
  }
}
export default RegistrationComponent;