import React, { Component } from 'react';
import './app.css';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import PersonName from './PersonName';
import SurgeryDetailsForm from './SurgeryDetailsForm';

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
});

class SurgerySummary extends Component {
  state = {
    editSurgeryDialogOpen: false,
  };

  componentDidMount() {
  }

  handleClickOpen = () => {
    this.setState({ editSurgeryDialogOpen: true});
  };

  handleClose = () => {
    this.setState({ editSurgeryDialogOpen: false });
  };

  handleSave = () => {
    this.setState({ editSurgeryDialogOpen: false });
  };

  render() {
    const {classes, surgery, index} = this.props;
    return (
      <Grid item container direction="column" xs={12} className={classes.layout}>
        <Typography variant="h6" gutterBottom className={classes.title}>
          Surgery
          {' #'}
          {index}
        </Typography>
        <Grid container>
          <React.Fragment key="speciality">
            <Grid item xs={6}>
              <Typography gutterBottom>Speciality</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>{surgery.speciality}</Typography>
            </Grid>
          </React.Fragment>
          <React.Fragment key="date">
            <Grid item xs={6}>
              <Typography gutterBottom>Date</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>{surgery.date}</Typography>
            </Grid>
          </React.Fragment>
          <React.Fragment key="surgeon">
            <Grid item xs={6}>
              <Typography gutterBottom>Surgeon</Typography>
            </Grid>
            <Grid item xs={6}>
              <PersonName person={surgery.surgeon}/>
            </Grid>
          </React.Fragment>
          <React.Fragment key="hospital">
            <Grid item xs={6}>
              <Typography gutterBottom>Hospital</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>{surgery.hospital.name}</Typography>
            </Grid>
            <Grid item xs={6}>
              <div>
                <Fab color="secondary" aria-label="edit" className={classes.fab} onClick={this.handleClickOpen}>
                  <Icon>edit_icon</Icon>
                </Fab>
                <Dialog
                  disableBackdropClick
                  open={this.state.editSurgeryDialogOpen}
                  onClose={this.handleClose}
                  aria-labelledby="form-dialog-title"
                >
                  <DialogTitle id="form-dialog-title">Surgery details</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      Change surgery details here.
                    </DialogContentText>
                    <SurgeryDetailsForm surgery={surgery}/>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                      Cancel
                    </Button>
                    <Button onClick={this.handleSave} color="primary">
                      Save
                    </Button>
                  </DialogActions>
                </Dialog>
              </div>
            </Grid>
          </React.Fragment>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(SurgerySummary);
