import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { yellow, blueGrey } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Divder from '@material-ui/core/Divider';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab'
import Tooltip from '@material-ui/core/Tooltip'
import AddIcon from '@material-ui/icons/Add';


const useStyles = makeStyles(theme => ({
    fab: {
        backgroundColor: yellow[200],
        '&:hover': {
            backgroundColor: yellow[600],
        },
    },
    dialog: {
        color: blueGrey[500]
    },
    button: {
        borderColor: blueGrey[100],
        color: blueGrey[500],
        borderColor: blueGrey[500],
    },
}));

export default function Bookmark(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const { collectionTitle } = props


    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }

    return (
        <div>
        <Tooltip title='Add a new bookmark'>
            <Fab aria-label="Add" className={classes.fab} onClick={handleClickOpen}>
                <AddIcon />
            </Fab>
        </Tooltip>
        
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title" className={classes.dialog}>Create new bookmark</DialogTitle>
            <Divder variant='middle' />
            <DialogContent>
                {`Add this page to the collection : ${collectionTitle}`}
            <DialogContentText>
            </DialogContentText>
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="URL"
                type="url"
                fullWidth
            />
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Title"
                type="text"
                fullWidth
            />
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose} className={classes.button}>
                Cancel
            </Button>
            <Button onClick={handleClose} className={classes.button}>
                Create
            </Button>
            </DialogActions>
        </Dialog>
        </div>
    );
}