import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
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
import { postApiCall } from '../../common/util/httputil';
import { onRegistration } from '../../server/auth/authservice';

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
            open:props.open,
            firstName: "",
            lastName: "",
            mobno: "",
            country: "",
            dialCode: "",
            gender: "",
            emailId: "",
            password: ""

        };

    }

    

    handleClose =()=>
    {
        this.setState({
            open:false
        });
    }

    onRegistratonClick=(e)=>{
        e.preventDefault();
        this.setState({
            submitProgress:true       
        });
        console.log(this.state)
        onRegistration(this.state)
        this.setState({
            submitProgress:false       
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
                        Sign up
                        </Typography>
                        <form className="form" noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                            <TextField onChange = {(evt) =>{this.setState({firstName:evt.target.value})}}
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                            />
                            </Grid>
                            
                            <Grid item xs={12} sm={6}>
                            <TextField onChange= {(evt) =>{this.setState({lastName:evt.target.value})}}
                                variant="outlined"
                                
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="lname"
                            />
                            </Grid>

                            <Grid item xs={12}>
                                <Autocomplete onChange= {(evt,value,reason) =>{this.setState({dialCode:value.phone,country:value.code})}}
                                 
                                id="country-select-demo"
                                
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
                            <TextField onChange= {(evt) =>{this.setState({mobno:evt.target.value})}}
                                autoComplete="mobno"
                                name="mobileno"
                                variant="outlined"
                                required
                                fullWidth
                                id="mobileno"
                                label="Mobile No"
                                
                            />
                            </Grid>
                            <Grid item xs={12}>
                            <TextField onChange= {(evt) =>{this.setState({emailId:evt.target.value})}}
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                            </Grid>
                            <Grid item xs={12}>
                            <TextField onChange= {(evt) =>{this.setState({password:evt.target.value})}}
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
                             <Grid item xs={12}>       
                                <FormControl component="fieldset">
                                <FormLabel component="legend">Gender</FormLabel>
                                <RadioGroup  row aria-label="gender" name="gender1"  value={this.state.gender} onChange={(evt) =>{this.setState({gender:evt.target.value})}}>
                                
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
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
                     
                        <LoaderButton buttontext="Sign Up" onClick ={this.onRegistratonClick} loading ={this.state.submitProgress}/>
                        
                        <Grid container justify="flex-end">
                            <Grid item>
                            <Link href="/auth/signin" variant="body2">
                                Already have an account? Sign in
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


export default RegistrationComponent;


