import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
  
class AddressDetailsComponent extends React.Component
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
            handleBlur
          } = this.props.formikRef


        return(
       
        
            <React.Fragment>
                <Grid item xs={12} sm={12}>
                <TextField
                    autoComplete="mainAddress"
                    name="mainAddress"
                    variant="outlined"
                    required
                    fullWidth
                    id="mainAddress"
                    label="Flat No/Area/Street Name"   
                    error={errors.mainAddress && touched.mainAddress}
                    value={values.mainAddress}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={(errors.mainAddress && touched.mainAddress) && errors.mainAddress}
                />
                </Grid>
                
                <Grid item xs={12} sm={12}>
                <TextField
                    variant="outlined"    
                    fullWidth
                    id="landmark"
                    label="Landmark"
                    name="landmark"
                    autoComplete="landmark"
                    error={errors.landmark && touched.landmark}
                    value={values.landmark}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={(errors.landmark && touched.landmark) && errors.landmark}
                />
                </Grid>

                
                <Grid item xs={12}>
                <TextField
                    autoComplete="pincode"
                    name="pincode"
                    variant="outlined"
                    required
                    fullWidth
                    id="pincode"
                    label="Pincode"
                    error={errors.pincode && touched.pincode}
                    value={values.pincode}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={(errors.pincode && touched.pincode) && errors.pincode}
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField 
                    variant="outlined"
                    required
                    fullWidth
                    id="city"
                    label="City"
                    name="city"
                    autoComplete="city"
                    error={errors.city && touched.city}
                    value={values.city}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={(errors.city && touched.city) && errors.city}
                />
                </Grid>
                <Grid item xs={12} sm={6}>     
                <TextField 
                    variant="outlined"
                    required
                    fullWidth
                    id="state"
                    label="State"
                    name="state"
                    autoComplete="state"
                    error={errors.state && touched.state}
                    value={values.state}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={(errors.state && touched.state) && errors.state}
                />
                </Grid>
                <Grid item xs={12} sm={6}>     
                <TextField 
                    variant="outlined"
                    required
                    fullWidth
                    id="lat"
                    label="Latitue"
                    name="lat"
                    autoComplete="lat"
                    error={errors.lat && touched.lat}
                    value={values.lat}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={(errors.lat && touched.lat) && errors.lat}
                />
                </Grid>
                <Grid item xs={12} sm={6}>     
                <TextField 
                    variant="outlined"
                    required
                    fullWidth
                    id="lng"
                    label="Longitue"
                    name="lng"
                    autoComplete="lng"
                    error={errors.lng && touched.lng}
                    value={values.lng}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={(errors.lng && touched.lng) && errors.lng}
                />
                </Grid>

           
                   
                    
                </React.Fragment>   
                

                
            
           
        
       )
    }
}    

export default AddressDetailsComponent;