import React, { Component } from 'react';
import './app.css';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from './SurgeryDetailsForm';

const styles = {};

export class SurgicalProcedure extends Component {
  componentDidMount() {
  }

  render() {
    const {classes} = this.props;
    const {surgicalProcedure} = this.props;
    return (
      <React.Fragment>
        <Grid container spacing={24} item>
          <Grid item xs={12} md={6} lg={4}>
            <TextField
              required
              id="outlined-disabled"
              label="Description"
              defaultValue={surgicalProcedure.description}
              margin="normal"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TextField
              required
              id="outlined-disabled"
              label="Code"
              defaultValue={surgicalProcedure.code}
              margin="normal"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <TextField
              required
              id="outlined-disabled"
              label="Cost"
              defaultValue={surgicalProcedure.cost}
              margin="normal"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="outlined-disabled"
              label="Surgeon Surname"
              defaultValue={surgery.surgeon.lastName}
              margin="normal"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-disabled"
              label="Hospital"
              required
              defaultValue={surgery.hospital.name}
              margin="normal"
              fullWidth
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export class SurgicalProcedureForm extends Component {
  componentDidMount() {
  }


}
export default withStyles(styles)(SurgicalProcedure);
