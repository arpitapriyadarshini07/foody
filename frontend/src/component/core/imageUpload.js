import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { CssBaseline} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import CardHeader from '@material-ui/core/CardHeader';

  

const useStyles = (theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    input: {
      display: 'none',
    },
    cardroot: {
        maxWidth: 345,
      },
       media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
  });
  


class ImageUploadComponent extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            file: []
        }
        this.fileArray = [];
    }


    uploadMultipleFiles =(e)=> {
        var  fileObj = [];
        fileObj.push(e.target.files);
       for (let i = 0; i < fileObj.length; i++)     
            for(let j=0;j<fileObj[i].length;j++)  
                this.fileArray.push(URL.createObjectURL(fileObj[i][j]));
     
        this.setState({file:this.fileArray})
    
    }

    onImageRemove=(index)=>{
        var fileRemoveArr=this.state.file;
        fileRemoveArr.splice(index,1);
        this.setState({file:fileRemoveArr})
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
          var classes = this.props.classes;

        return(
       
        
            <React.Fragment>
                <Grid item xs={12} sm={12}>
                <input onChange = {this.uploadMultipleFiles}
                    accept="image/*"
                    className={classes.input}
                    id="image-Upload"
                    multiple
                    type="file"
                />
                <label htmlFor="image-Upload">
                    <Button variant="contained" color="primary" component="span">
                    Upload
                    </Button>
                </label>
                </Grid>
                    {(this.state.file || []).map((url,index) => (
                          <Grid item xs={12} sm={6}>

                            <Card className={classes.cardroot}>
                            <CardHeader
                                action={
                                <IconButton aria-label="delete" onClick={(evt)=>{this.onImageRemove(index)}}>
                                    <HighlightOffIcon variant="error" />
                                  </IconButton>
                                }/>

                            
                                <CardMedia
                                        className={classes.media}
                                        image={url}
                                    >
                                    </CardMedia>
                               <CssBaseline/>
                            </Card>
                     </Grid>
                    ))}
            
                <CssBaseline/>
               </React.Fragment>   
       )
    }
}    

export default withStyles(useStyles)(ImageUploadComponent);