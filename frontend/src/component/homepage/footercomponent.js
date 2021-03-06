import React from 'react';
import { withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Box } from '@material-ui/core';




const useStyles = (theme) =>
  ({
        root: {
        flexGrow: 1,
        },
        
        paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.text.disabled,
        }
      
  });

class FooterComponent extends React.Component
{
    constructor(props)
    {
        super(props)

    }

    render()
    {
        var classes = this.props.classes     
        return (

            <div className={classes.root}>
                 <Box bgcolor="grey.300">
                    <Paper className={classes.paper}>Powered by NavuPriya</Paper>
              </Box>
        
            </div>
  
        );

    }
}

export default withStyles(useStyles)(FooterComponent);