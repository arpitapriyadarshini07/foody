import React from 'react';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

class LoaderButton extends React.Component
{
    constructor(props)
    {
        super(props)

    }

    render()
    {

        return (
                <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className="submit"
                            disabled={this.props.loading}
                            onClick = {this.props.onClick}
                            >
                            {this.props.buttontext}
                            {this.props.loading && <CircularProgress size={24}  color="primary" />}
                        </Button>
                        
                )

    }
}

export default LoaderButton;