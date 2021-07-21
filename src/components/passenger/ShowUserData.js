import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: "70%",
    margin: "50px 0px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  media: {
    height: 140,
  },
});

export default function ShowUserData({ items }) {
  const classes = useStyles();
  console.log(items)

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {items.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {items.trips}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {items.airline[0].name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {items.airline[0].country}
          </Typography>
          <CardMedia
            className={classes.media}
            image={items.airline[0].logo}
            title="Contemplative Reptile"
          />
          <Typography gutterBottom variant="h5" component="h2">
            {items.airline[0].slogan}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {items.airline[0].headquarters}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {items.airline[0].website}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {items.airline.established}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
