import React, { Component } from 'react';
import './app.css';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


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


class PersonName extends Component {
  componentDidMount() {
  }

  render() {
    const {classes, person} = this.props;
    return (
      <Typography gutterBottom>
        {person.firstName}
        {' '}
        {person.surname}
      </Typography>
    );
  }
}

export default withStyles(styles)(PersonName);
