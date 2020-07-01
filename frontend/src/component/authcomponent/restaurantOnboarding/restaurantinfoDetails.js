import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { foodPreferrence } from '../../../common/constants/restaurantFilterConstants';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import AddressDetailsComponent from '../../core/addressComponent';
  
class RestaurantInfoDetails extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        var {
            values,
            touched,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue
          } = this.props.formikRef


        return(<Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className="paper">
            <Avatar className="avatar">
            <RestaurantMenuIcon color="error"/>
            </Avatar>
            <Typography component="h1" variant="h5">
            Restaurant Details
            </Typography>
           
           
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                <TextField
                    autoComplete="restaurantName"
                    name="restaurantName"
                    variant="outlined"
                    required
                    fullWidth
                   
                    id="restaurantName"
                    label="Resturant Name"
                    autoFocus   
                    error={errors.restaurantName && touched.restaurantName}
                    value={values.restaurantName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={(errors.restaurantName && touched.restaurantName) && errors.restaurantName}
                />
                </Grid>
                
                <Grid item xs={12} sm={12}>
                <TextField
                    variant="outlined"    
                    fullWidth
                    id="tagLine"
                    label="Tag Line"
                    name="tagLine"
                    autoComplete="tagline"
                    error={errors.tagLine && touched.tagLine}
                    value={values.tagLine}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={(errors.tagLine && touched.tagLine) && errors.tagLine}
                />
                </Grid>

                
                <Grid item xs={12}>
                <TextField
                    autoComplete="contactNo"
                    name="contactNo"
                    variant="outlined"
                    required
                    fullWidth
                    id="contactNo"
                    label="Restaurant Contact Number"
                    error={errors.contactNo && touched.contactNo}
                    value={values.contactNo}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={(errors.contactNo && touched.contactNo) && errors.contactNo}
                />
                </Grid>
                <Grid item xs={12}>
                <TextField 
                    variant="outlined"
                    required
                    fullWidth
                    id="restemailId"
                    label="Restaurant Email Address"
                    name="restemailId"
                    autoComplete="restemailId"
                    error={errors.restemailId && touched.restemailId}
                    value={values.restemailId}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={(errors.restemailId && touched.restemailId) && errors.restemailId}
                />
                </Grid>


                <Grid item xs={12}>
                <Autocomplete onChange = {(evt,value,reason) =>{setFieldValue("foodPreferrence",value)}}
                    id="foodPreferrence"
                    value={values.foodPreferrence}
                    options={foodPreferrence}
                    getOptionLabel={(option) => option.title}
                    openOnFocus
                    renderInput={(params) => <TextField {...params} label="Food Preferrence" variant="outlined" />}
                    />
                </Grid>
                <AddressDetailsComponent formikRef ={this.props.formikRef}/>
                
            </Grid>
           
        </div>
        </Container>)
    }
}    

export default RestaurantInfoDetails;