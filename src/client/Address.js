import React, { Component } from 'react';
import './app.css';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


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

class Address extends Component {
  componentDidMount() {
  }

  render() {
    const {classes} = this.props;
    const {address} = this.props;
    return (
      <Paper className={classes.paper}>
        <Typography variant="h5" gutterBottom>
          Address
        </Typography>
        <Grid container spacing={24} item>
          <Grid item xs={12}>
            <TextField
              required
              id="outlined-disabled"
              label="Line 1"
              defaultValue={address.line1}
              margin="normal"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} >
            <TextField
              id="outlined-disabled"
              label="Line 2"
              defaultValue={address.line2}
              margin="normal"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="outlined-disabled"
              label="City"
              defaultValue={address.city}
              margin="normal"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-disabled"
              label="Region / County"
              defaultValue={address.region}
              margin="normal"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <TextField
              id="outlined-disabled"
              label="Zip / Postal code"
              defaultValue={address.zipCode}
              margin="normal"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={7}>
            <TextField
              required
              id="outlined-disabled"
              label="Country"
              placeholder="Enter country"
              margin="normal"
              fullWidth
            />
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default withStyles(styles)(Address);
