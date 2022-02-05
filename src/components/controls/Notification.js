import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React from "react";


function Notifiction(props){

    const {notify,setNotify} = props;

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setNotify({
            ...notify,
            isOpen: false
        })
    }

    return (
    <Snackbar open={notify.isOpen} 
    autoHideDuration={800}
    onClose={handleClose}
    >
        <Alert severity={notify.type}
            onClose={handleClose}>
            {notify.message}
        </Alert>
    </Snackbar>)
}

export default Notifiction;