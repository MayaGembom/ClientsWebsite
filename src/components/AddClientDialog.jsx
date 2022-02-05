import { Dialog, DialogTitle, DialogContent, DialogActions, TextField,DialogContentText, makeStyles} from '@material-ui/core'
import React, { useRef} from 'react'
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

function AddClientDialog(props) {
const {addClientDialog, setAddClientDialog} = props;
const classes = useStyles()
const idValRef = useRef('')
const fullNameValRef = useRef('')
const phoneNumValRef = useRef('')
const ipValRef = useRef('')

  return (
      <Dialog open= {addClientDialog.isOpen}>
          <DialogTitle>

          </DialogTitle>
          <DialogContent>
          <DialogContentText>
            To add new client to this website, please enter the client Id, Full Name, IP Address
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="id"
            label="ID"
            inputRef={idValRef}
            placeholder="Enter ID"
            required
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="name"
            label="Full Name"
            inputRef={fullNameValRef}
            placeholder="Enter Full Name"
            required
            fullWidth
            variant="standard"
          />

            <TextField
            margin="dense"
            id="phone"
            label="Phone Number"
            inputRef={phoneNumValRef}
            placeholder="Enter Phone Number"
            required
            fullWidth
            variant="standard"
          />

            <TextField
            margin="dense"
            id="ip"
            label="IP Address"
            inputRef={ipValRef}
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            placeholder="Enter IP Address"
            required
            fullWidth
            variant="standard"
          />

          </DialogContent>

          <DialogActions className={classes.dialogAction}>
                <Button
                   text="No"
                    color="default"
                    onClick={() => setAddClientDialog({ ...addClientDialog, isOpen: false })} />
                <Button
                    text="Yes"
                    color="secondary"
                    onClick={() => {
                        console.log(fullNameValRef.current.value)
                        console.log(idValRef.current.value)
                        console.log(phoneNumValRef.current.value)
                        console.log(ipValRef.current.value)
                        var newClient = {
                            fullName: fullNameValRef.current.value,
                            id: idValRef.current.value,
                            phoneNum: phoneNumValRef.current.value,
                            ip: ipValRef.current.value
                        }
                        
                        //TODO: validation 

                        setAddClientDialog({ ...addClientDialog, isOpen: false });
                        props.getData(newClient)

                        
                        }
                    } />
            </DialogActions>
      </Dialog>
  );
}

export default AddClientDialog;
