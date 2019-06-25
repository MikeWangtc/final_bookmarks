import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { blueGrey } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';

import BookmarksTable from './BookmarksTable';
import Bookmark from './BookmarksAdd';
import CommentCard from './CommentCard';



const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'left',
      display: 'column',
      justifyContent: 'center',
      color: theme.palette.text.secondary,
      width: '100%'
    },
    textField: {
        borderColor: blueGrey[500],
        color: blueGrey[500],
        outlineColor:  blueGrey[500],
        '&:hover': {
            color: blueGrey[500],
        },
    },
    typography :{
        color: blueGrey[500],
    },
    typoStar: {
        paddingRight: '10px'
    },
    chip: {
        margin: theme.spacing(1),
        backgroundColor: blueGrey[100],
    },
    button: {
        borderColor: blueGrey[100],
        color: blueGrey[500],
        borderColor: blueGrey[500],
    },
    div: {
        display: 'flex', 
        justifyContent: 'left',
        marginRight: 'auto'
    },
    div1: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        //paddingBottom: '10px'
    },
    div2: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    div3: {
        display: 'flex', 
        justifyContent: 'left',
        marginRight: 'auto'
    },
    div4: {
        display: 'flex',
        direction: 'row',
        alignItems: 'center'
    },
    div5 : {
        width: '100%',
        height: '15px',
    }
  }));

export default function PublicCard(props) {
    const classes = useStyles();
    const { title, description, bookmarks, tags, likes, publishedTime, comments } = props.collection
  
    return (
      <div className={classes.root}>
        <Grid container spacing={2} direction="row" justify="flex-start" alignItems="flex-start">
          <Grid container xs={12} sm={8}>
            <Paper className={classes.paper}>
                <Grid item xs={12}>     
                    <div className={classes.div1}>
                        <div className={classes.div}> <Typography  variant='h3' className={classes.typography}> {title} </Typography> </div>
                        <Tooltip title='Number of likes'>
                            <FavoriteIcon />
                        </Tooltip> 
                        <Typography variant='h6' className={classes.typoStar} > {'X' + likes} </Typography>
                        <TextField
                            id="outlined-search"
                            label={title}
                            placeholder='Search in Collection'
                            type="search"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            InputProps={{
                                startAdornment: <IconButton> <SearchIcon /> </IconButton>
                            }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </div>
                    <Typography variant='body2' color='textSecondary' paragraph>
                        Tags
                        {tags.map(tag => 
                            <Chip
                            size="small"
                            label={tag}
                            clickable
                            className={classes.chip}
                        />)}
                         <Divider variant='middle'/>
                    </Typography>
                    <Typography variant='body2' color='textSecondary' > Published Date </Typography>
                    <Typography vvariant='body1' color='textPrimary' paragraph>
                        <div className={classes.div3}>
                            <div className={classes.div3}> {publishedTime} </div>
                            <Tooltip title={`Make \'${title}\' go private`}>
                                <Button variant='outlined' size='medium' className={classes.button} onClick={event => console.log('Go private')}>
                                    Archive
                                </Button>
                            </Tooltip>
                        </div>
                    </Typography>
                    <Typography variant='body2' color='textSecondary'> Description </Typography>
                    <Typography variant='body1' color='textPrimary'> {description} </Typography>
                     <div className={classes.div2}>
                        <div className={classes.div3}> <Typography variant='body2' color='textSecondary'> Bookmarks </Typography> </div>               
                        <Bookmark collectionTitle={title}/>
                     </div>
                    <BookmarksTable bookmarks={bookmarks}> </BookmarksTable>
                </Grid>
            </Paper>  
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>
                <Typography variant='h4' className={classes.typography}> Comments </Typography>
                <Typography variant='body2' color='textSecondary' paragraph > From others to improve your collections. </Typography>
                <Divider variant='middle'></Divider>
                <Grid item xs={12} spacing={2}>
                {   
                    comments.map(comment => <>
                        <div className={classes.div5}> </div>
                        <CommentCard comment={comment} /> </>)
                }
                </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }