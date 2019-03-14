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
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import SurgeryDetailsForm from './SurgeryDetailsForm';
import PrintableInvoice from './Invoice';

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
    printSurgeryDialogOpen: false,
  };

  componentDidMount() {
  }

  handleClickOpen = () => {
    this.setState({editSurgeryDialogOpen: true});
  };

  handleClickPrint = () => {
    this.setState({printSurgeryDialogOpen: true});
  };

  handleClose = () => {
    this.setState({editSurgeryDialogOpen: false, printSurgeryDialogOpen: false});
  };

  handleSave = () => {
    this.setState({editSurgeryDialogOpen: false});
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
          <Grid item xs={16} md={12} lg={8}>
            <List disablePadding>
              <ListItem className={classes.listItem} key="speciality">
                <ListItemText primary="Speciality"/>
                <Typography variant="body2">{surgery.speciality}</Typography>
              </ListItem>
              <ListItem className={classes.listItem} key="date">
                <ListItemText primary="Date"/>
                <Typography variant="body2">{surgery.date}</Typography>
              </ListItem>
              <ListItem className={classes.listItem} key="surgeon">
                <ListItemText primary="Surgeon"/>
                <Typography variant="body2">{`${surgery.surgeon.firstName} ${surgery.surgeon.surname}`}</Typography>
              </ListItem>
              <ListItem className={classes.listItem} key="hospital">
                <ListItemText primary="Date"/>
                <Typography variant="body2">{surgery.hospital.name}</Typography>
              </ListItem>
              {surgery.procedures.map(procedure => (
                <ListItem className={classes.listItem} key={procedure.id}>
                  <ListItemText primary={procedure.description} secondary={`${procedure.code}  -  ${procedure.note}`}/>
                  <Typography variant="body2">{`$${procedure.cost}`}</Typography>
                </ListItem>
              ))}
            </List>
          </Grid>
          <React.Fragment key="all_buttons">
            <Grid item xs={6}>
              <div>
                <Fab color="primary" aria-label="edit" className={classes.fab} onClick={this.handleClickPrint}>
                  <Icon>print</Icon>
                </Fab>
                <Fab color="secondary" aria-label="edit" className={classes.fab} onClick={this.handleClickOpen}>
                  <Icon>edit_icon</Icon>
                </Fab>
                <Fab color="secondary" aria-label="edit" className={classes.fab} onClick={this.handleClickOpen}>
                  <Icon>delete</Icon>
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
                <Dialog
                  disableBackdropClick
                  open={this.state.printSurgeryDialogOpen}
                  onClose={this.handleClose}
                  aria-labelledby="form-dialog-title"
                >
                  <DialogTitle id="form-dialog-title">Invoice details</DialogTitle>
                  <DialogContent>
                    <PrintableInvoice surgery={surgery}/>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                      Cancel
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
