import React, { Component } from 'react';
import './app.css';
import { withStyles } from '@material-ui/core/styles';
import ReactToPrint from 'react-to-print';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import PersonName from "./PersonName";

const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  fab: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
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
  title: {
    marginTop: theme.spacing.unit * 2,
  },
});


class Invoice extends Component {
  componentDidMount() {
  }

  render() {
    const {patient, surgery, classes} = this.props;

    return (
      <Grid container={12} align="center">
        <Grid item xs={12} md={10} lg={8}>
          <Typography variant="h6">
          Dr Marc Wozza
          </Typography>
          <Typography variant="subtitle2">
          BSc, MBBS, FRCA
          </Typography>
          <Typography variant="subtitle2">
           Consultant Anaesthetist
          </Typography>
          <Typography gutterBottom>
           28 Lala Way,
          </Typography>
          <Typography gutterBottom>
          RBS,
          </Typography>
          <Typography gutterBottom>
          London,
          </Typography>
          <Typography gutterBottom>
          N2 GLF,
          </Typography>
          <Typography gutterBottom>
            <a href="mail:aaa@bbb.com">aaa@bbb.com</a>
          </Typography>
          <Typography gutterBottom>
          Mobile 07949 247 454
          </Typography>

        </Grid>
        <Grid container align="left" direction="column" xs={12} sm={6}>
          <Typography variant="h6">
            Invoice for anaesthetic fees
          </Typography>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Payment details
          </Typography>
          <Grid container>
            <React.Fragment >
              <Grid item xs={6}>
                <Typography gutterBottom>Provider Number</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{surgery.hospital.name}</Typography>
              </Grid>
            </React.Fragment>
            <React.Fragment >
              <Grid item xs={6}>
                <Typography gutterBottom>Key</Typography>
              </Grid>
              <Grid item xs={6}>
                <PersonName  gutterBottom>Value</PersonName>
              </Grid>
            </React.Fragment>
          </Grid>
        </Grid>
        <Grid item>
          <Typography gutterBottom align="left">
            Many thanks for your prompt attention,
          </Typography>
          <Typography variant="subtitle2" align="left">
            Dr Marc Wozza,
          </Typography>

        </Grid>
      </Grid>


    );
  }
}

class PrintableInvoice extends React.Component {
  render() {
    const {surgery} = this.props;
    return (
      <div>
        <ReactToPrint
          trigger={() => <a href="#">Click here to print</a>}
          content={() => this.componentRef}
        />
        <Invoice surgery={surgery} classes={styles} ref={el => (this.componentRef = el)} />
      </div>
    );
  }
}

export default withStyles(styles)(PrintableInvoice);
