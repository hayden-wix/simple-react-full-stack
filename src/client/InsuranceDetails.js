import React, { Component } from 'react';
import './app.css';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// import Grid from "./FullPatient";


const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'grid',
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

const allInsurers = [
  {
    value: 'i00001',
    name: 'BUPA',
  },
  {
    value: 'i00002',
    name: 'PPdP',
  },
  {
    value: 'i00003',
    name: 'ABC Insurance',
  }
];


class InsuranceDetails extends Component {
  state = {
    companyId: 'i00002'
  }

  componentDidMount() {
  }

  handleChange = name => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const {classes, insurance} = this.props;
    return (
      <Grid container item spacing={16}>
        <Grid item xs={12} sm={8} md={4} lg={2}>
          {/*         <FormControl>
            <InputLabel htmlFor="insurance-company">Insurance Company</InputLabel>
            <Select
              value={this.state.companyId}
              name="insurance-company"
              onChange={this.handleChange}
              input={<Input id="insurance-company"/>}
            >
              {allInsurers.map(insurer => (
                <MenuItem key={insurer.value} value={insurer.value}>
                  {insurer.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
*/}
          {' '}
          <TextField
            id="outlined-select-insurance-company"
            select
            label="Insurance"
            className={classes.textField}
            value={this.state.companyId}
            onChange={this.handleChange('companyId')}
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
            margin="normal"
          >
            {allInsurers.map(insurer => (
              <MenuItem key={insurer.value} value={insurer.value}>
                {insurer.name}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={8} direction="row">
          <TextField
            id="outlined-disabled"
            label="Policy Number"
            defaultValue={insurance.policyNo}
            margin="normal"
          />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(InsuranceDetails);
