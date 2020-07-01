import React, { Suspense } from 'react';
import StepperUI from '../../core/stepper';
import Dialog from '@material-ui/core/Dialog';

import {
    Formik
  } from 'formik';
import * as Yup from 'yup';
const signUpDetailsComponent =React.lazy(() => import('./restaurantSignUpDetails'));
const restInfoDetailsCOmponent = React.lazy(()=>import('./restaurantinfoDetails'));
const restaurantImageUploadComponent = React.lazy(()=>import('./restaurantImageUpload'))

class ReastaurantRegistration extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            submitProgress:false,
            
            country: "",
            dialCode: ""
        };
        this.restRegistrationHeaers = ["Sign Up details","Restaurant Details","Upload Restaurant Images"];
        this.restaurantRegistrationSteps = [signUpDetailsComponent,restInfoDetailsCOmponent,restaurantImageUploadComponent];
       
      }

    getFormFields()
    {
         return {firstName: "",lastName: "",mobno: "",country: "",dialCode: "",
         gender: "",emailId: "",password: "",restaurantName: "",
         tagLine: "",contactNo: "",restemailId: "",
         foodPreferrence: "",
         mainAddress: "",
         landmark: "",
         pincode: "",
         city: "",
         state: "",
         lat: "",
         lng: "" }; 
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
              mobno:Yup.number().required('Mobile No is Mandatory').min(6000000000,"Please enter valid mobile number").max(10000000000,"Please enter valid mobile number"),
              restemailId: Yup.string()
              .email('Please provide valid Restaurant Email ID')
              .required('Restaurant Email ID is mandatory'),
              restaurantName: Yup.string()
              .required('Restaurant Name is Mandatory'),
              pincode:Yup.number().required('Pincode is Mandatory').min(100000,"Please enter a valid Pincode").max(999999,"Please enter a valid Pincode"),
              contactNo:Yup.number().required('Restaurant Contact No is Mandatory').min(6000000000,"Please enter valid Restaurant Contact number").max(10000000000,"Please enter valid Restaurant Contact number"),
              city: Yup.string()
              .required('City is a required field'),
              state: Yup.string()
              .required('State is a required field'),
              lat: Yup.string()
              .required('Latitude is Mandatory'),
              lng: Yup.string()
              .required('Longitude is Mandatory'),
              mainAddress: Yup.string()
              .required('Please provide your detailed address'),
              country: Yup.string()
              .required('Please Select Country')
            }
            )
        }
    
    onSubmit= async (values, { setSubmitting })=>{
        console.log(values)
        this.setState({submitProgress:true});
        values.country=this.state.country;
        values.dialCode=this.state.dialCode;
        console.log(this.state);
        this.setState({
            submitProgress:false
        }); 
        this.props.onRegistrationClose();
    }

    handleClose =()=>
    {
        this.props.onClose();
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
                      <React.Fragment>  
                           <form className="form" noValidate onSubmit={handleSubmit}>
                            <StepperUI stepHeaders = {this.restRegistrationHeaers} stepContent={this.restaurantRegistrationSteps} formikRef={formikRef}/>               
                           </form> 
                    </React.Fragment>
                 )
                }}        
          
           </Formik>
         </Dialog>
    );
  }
}

export default ReastaurantRegistration;