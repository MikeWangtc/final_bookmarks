import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}));
  
export default function(props){
    const classes = useStyles()
    const bookmarks = props.bookmarks
    console.log(bookmarks)
    return (
        <List className={classes.root}>
          {bookmarks.map(bookmark => {
              const {title, icon, url, shortUrl} = bookmark
              return(
                  <>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar imgProps={{title: url}} src={icon}/>
                        </ListItemAvatar>
                        <ListItemText
                        primary={title}
                        secondary={
                            <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textSecondary"
                            >
                            {shortUrl}
                            </Typography>
                            </React.Fragment>
                        }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                </>
              )
          })}  
        </List>
      );
}
