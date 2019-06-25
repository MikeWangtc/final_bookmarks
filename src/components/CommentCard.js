import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import { red } from '@material-ui/core/colors';
import DoneIcon from '@material-ui/icons/Done';


import CommentReply from './CommentReply';

const useStyles = makeStyles(theme => ({
  card: {
    width: '100%'
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function CommentCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const { author, text, time } = props.comment

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="Author Icon" src={author.avatar} className={classes.avatar} />
        }
        action={
          <CommentReply comment={props.comment} />
        }
        title={author.name}
      />
      <Divider variant='inset' />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {text}
        </Typography>
      </CardContent>
      <Divider variant='middle'></Divider>
      <CardActions disableSpacing>
        <IconButton className={classes.doneIcon} aria-label="Have Replied">
          <DoneIcon />
        </IconButton>
        <Typography variant='body2' color='textSecondary'> {`commented at ${time}`} </Typography>
      </CardActions>
    </Card>
  );
}