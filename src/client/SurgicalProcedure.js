import React, { Component } from 'react';
import './app.css';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = {};

class SurgicalProcedure extends Component {
  componentDidMount() {
  }

  render() {
    const {classes} = this.props;
    const {procedure} = this.props;
    return (
      <React.Fragment>
        <Typography> frff</Typography>
        <Grid container spacing={24} item>
          <Grid item xs={12} md={6} lg={4}>
            <TextField
              required
              id="outlined-disabled"
              label="Description"
              defaultValue={procedure.description}
              margin="normal"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TextField
              required
              id="outlined-disabled"
              label="Code"
              defaultValue={procedure.code}
              margin="normal"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <TextField
              required
              id="outlined-disabled"
              label="Cost"
              defaultValue={procedure.cost}
              margin="normal"
              fullWidth
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(SurgicalProcedure);
