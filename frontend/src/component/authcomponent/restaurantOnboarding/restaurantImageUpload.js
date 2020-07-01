import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import ImageUploadComponent from '../../core/imageUpload';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

class RestaurantImageUploadComponent extends React.Component
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
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset
          } = this.props.formikRef


        return(<Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className="paper">
            <Avatar className="avatar">
            <PermMediaIcon color="error"/>
            </Avatar>
            <Typography component="h1" variant="h5">
            Upload Restaurant Images
            </Typography>
            <Grid container spacing={2}>
            <ImageUploadComponent formikRef/>
            </Grid>
            <CssBaseline />
        </div>    
        </Container>)
    }
}    

export default RestaurantImageUploadComponent;