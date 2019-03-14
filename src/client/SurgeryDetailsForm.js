import React, { Component } from 'react';
import './app.css';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    // backgroundColor: 'yellow',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3,
    },
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

class SurgeryDetailsForm extends Component {
  componentDidMount() {
  }

  render() {
    const {classes} = this.props;
    const {surgery} = this.props;
    return (
      <Paper className={classes.paper}>
        <Grid container spacing={24} item>
          <Grid item xs={12}>
            <TextField
              required
              id="outlined-disabled"
              label="Speciality"
              defaultValue={surgery.speciality}
              margin="normal"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} >
            <TextField
              required
              id="outlined-disabled"
              label="Date"
              type="date"
              defaultValue={surgery.date}
              margin="normal"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="outlined-disabled"
              label="Surgeon First Name"
              defaultValue={surgery.surgeon.firstName}
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
      </Paper>
    );
  }
}

export default withStyles(styles)(SurgeryDetailsForm);
