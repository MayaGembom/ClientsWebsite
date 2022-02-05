import { Dialog, DialogTitle, DialogContent, DialogActions, Typography, makeStyles} from '@material-ui/core'
import React from "react";
import Button from './controls/Button';


const useStyles = makeStyles(theme => ({
    dialog: {
        padding: theme.spacing(2),
        position: 'absolute',
        top: theme.spacing(5)
    },
    dialogTitle: {
        textAlign: 'center'
    },
    dialogContent: {
        textAlign: 'center'
    },
    dialogAction: {
        justifyContent: 'center'
    },
    titleIcon: {
        backgroundColor: theme.palette.secondary.light,
        color: theme.palette.secondary.main,
        '&:hover': {
            backgroundColor: theme.palette.secondary.light,
            cursor: 'default'
        },
        '& .MuiSvgIcon-root': {
            fontSize: '8rem',
        }
    }
}))

function ConfirmDialog(props) {

const {confirmDialog, setConfirmDialog} = props;
const classes = useStyles()

  return (
      <Dialog open= {confirmDialog.isOpen}>
          <DialogTitle>

          </DialogTitle>
          <DialogContent>
          <Typography variant="h6">
          {confirmDialog.title}
          </Typography>
          <Typography variant="subtitle2">
          {confirmDialog.subtitle}
          </Typography>
          </DialogContent>

          <DialogActions className={classes.dialogAction}>
                <Button
                   text="No"
                    color="default"
                    onClick={() => setConfirmDialog({ ...confirmDialog, isOpen: false })} />
                <Button
                    text="Yes"
                    color="secondary"
                    onClick={confirmDialog.onConfirm} />
            </DialogActions>
      </Dialog>
  );
}

export default ConfirmDialog;
