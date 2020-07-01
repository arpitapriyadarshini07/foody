import React, { Suspense } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { StepContent } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import LoaderButton from './button';


const useStyles = (theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
});


class StepperUI extends React.Component {
  constructor(props)
  {
      super(props);
      this.state={activeStep:0,skipped:[],submitProgress:false}
      this.steps = this.props.stepHeaders;
    
  }  
  
   
  
   getStepContent(step) {
       var StepComponent=this.props.stepContent[step];
      return (
       <Suspense fallback={<div>Loading....</div>}>
        <StepComponent formikRef = {this.props.formikRef}/>
       </Suspense>
      );
  }
  
  

   isStepOptional = (step) => {
    return false;
  };

   isStepSkipped = (step) => {
    return this.state.skipped.indexOf(step) !== -1;
  };

   handleNext = () => {
    let newSkipped = this.state.skipped;
    if (this.isStepSkipped(this.state.activeStep)) {
      newSkipped =[...newSkipped];
      newSkipped.pop(this.state.activeStep);
    }

    this.setState({activeStep:this.state.activeStep + 1});
    this.setState({skipped:newSkipped});
  };

   handleBack = () => {
    this.setState({activeStep:this.state.activeStep - 1});
  };

   handleSkip = () => {
    if (!this.isStepOptional(this.state.activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }
    this.setState({activeStep:this.state.activeStep + 1});
    this.setState({skipped:(prevSkipped) => {
      const newSkipped = [...prevSkipped];
      newSkipped.push(this.state.activeStep);
      return newSkipped;
    }});
    
  };

   handleReset = () => {
    this.setState({activeStep:0});
  };
  render()
  {
    var classes = this.props.classes;   
    var stepList=[];
    this.steps.map((label, index) => {
      const stepProps = {};
      const labelProps = {};
      if (this.isStepOptional(index)) {
        labelProps.optional = <Typography variant="caption">Optional</Typography>;
      }
      if (this.isStepSkipped(index)) {
        stepProps.completed = false;
      }
      stepList.push( <Step key={label} {...stepProps}>
          <StepLabel {...labelProps}>{label}</StepLabel>
        </Step>)
      })

  return (
    
     <React.Fragment>
    <div className={classes.root}>
    <Container component="main" maxWidth="xs">
        <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>  
      <Stepper activeStep={this.state.activeStep} alternativeLabel>
       {stepList}
      </Stepper>
      </Grid>
      <Grid item xs={12} sm={12}>  
        {this.getStepContent(this.state.activeStep)}
        </Grid> 
        <Grid item xs={12} sm={6} alignContent="flex-start">  
        <Button disabled={this.state.activeStep === 0} onClick={this.handleBack} className={classes.button}>
                Back
        </Button>
        </Grid>
        <Grid item xs={12} sm={6} alignContent="flex-end">  
       
        {this.state.activeStep === this.steps.length - 1 ? (<LoaderButton buttontext="Submit"  loading ={this.state.submitProgress}/>) : ( <Button
                variant="contained"
                color="primary"
                onClick={this.handleNext}
                className={classes.button}
              >
               Next
              </Button>)}
              </Grid> 
              </Grid> 
              </Container>       
              </div>      
        </React.Fragment>
  );
}
}


export default withStyles(useStyles)(StepperUI);