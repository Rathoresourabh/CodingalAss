import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: "70%",
    margin: "50px 0px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function ShowPost({ post }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {post.title}
        </Typography>
        <Typography variant="body2" component="p">
          {post.body}
        </Typography>
      </CardContent>
    </Card>
  );
}
