import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { yellow, blueGrey } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Divder from '@material-ui/core/Divider';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography'

import MoreVertIcon from '@material-ui/icons/MoreVert';

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
    div1: {
        display: 'flex',
        direction: 'row',
        alignItems: 'center'
    }
}));

export default function CommentReply(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const { author, text, time }  = props.comment


    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }

    return (
        <div>
        <Tooltip title={`Inbox ${author.name}`}>
            <IconButton aria-label="Reply comments" onClick={handleClickOpen}>
              <MoreVertIcon />
            </IconButton>
        </Tooltip>
        
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title" className={classes.dialog}>
                <div className={classes.div1}>
                <Avatar src={author.avatar}/>
                {`Reply comments from ${author.name}.`}
                </div>
                
            </DialogTitle>
            <Divder variant='middle' />
            <DialogContent>
                <Typography variant='body2' color='textSecondary'> #Comments </Typography>
                <Typography variant='body1' color='textPrimary'> {text} </Typography>
            <DialogContentText>
            </DialogContentText>

            <TextField
                autoFocus
                margin="dense"
                id='reply'
                label="Reply"
                type="text"
                fullWidth
                multiline
            />
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose} className={classes.button}>
                Cancel
            </Button>
            <Button onClick={event => {
                handleClose();
                console.log('submit reply to others')
            }} className={classes.button}>
                Submit
            </Button>
            </DialogActions>
        </Dialog>
        </div>
    );
}