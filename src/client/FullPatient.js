import React, { Component } from 'react';
import './app.css';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Address from './Address';
import InsuranceDetails from './InsuranceDetails';
import SurgeryList from './SurgeryList';


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


const genders = [
  {
    value: 'M',
    label: 'Male',
  },
  {
    value: 'F',
    label: 'Female',
  },
  {
    value: '?',
    label: 'Non-binary',
  }
];

class FullPatient extends Component {
  componentDidMount() {
  }

  render() {
    const {classes, patient} = this.props;
    return (
      <Paper className={classes.paper}>
        <Typography variant="h5" gutterBottom>
          Patient Details
        </Typography>
        <Paper className={classes.paper}>
          <Grid container spacing={24} item>
            <Grid item xs={6} sm={5} md={4} lg={2} >
              <TextField
                required
                id="outlined-disabled"
                label="First Name"
                defaultValue={patient.firstName}
                margin="normal"
                fullWidth
              />
            </Grid>
            <Grid item xs={6} sm={5} md={4} lg={2} >
              <TextField
                required
                id="outlined-disabled"
                label="Surname"
                defaultValue={patient.lastName}
                margin="normal"
                fullWidth
              />
            </Grid>
            <Grid item xs={5} sm={4} md={3} lg={1} >
              <TextField
                required
                id="outlined-select-gender"
                select
                label="Gender"
                className={classes.textField}
                value="M"
                SelectProps={{
                  MenuProps: {
                    className: classes.menu,
                  },
                }}
                margin="normal"
                fullWidth
              >
                {genders.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                id="outlined-disabled"
                label="Phone number"
                type="string"
                defaultValue={patient.phone}
                margin="normal"
                fullWidth
              />
            </Grid>
            <Grid item xs={6} sm={5} md={4} lg={2} >
              <TextField
                id="outlined-disabled"
                label="Date of Birth"
                type="date"
                defaultValue={patient.dob}
                margin="normal"
                fullWidth
              />
            </Grid>
            <Grid item xs={24} sm={18} md={12} lg={10}>
              <Paper className={classes.paper}>
                <InsuranceDetails insurance={patient.insurance}/>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={10}>
              <Address address={patient.address}/>
            </Grid>
            <Grid item xs={12} sm={10}>
              <SurgeryList surgeries={patient.surgeries}/>
            </Grid>
          </Grid>
        </Paper>

      </Paper>
    );
  }
}

export default withStyles(styles)(FullPatient);
