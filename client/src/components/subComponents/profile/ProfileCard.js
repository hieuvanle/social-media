import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import PostModal from "../post/PostModal";
import ProfileModal from "./ProfileModal";
import axios from "axios";
import getAuthUser from "../../../services/getAuthUser";
import backgroundPhoto from "../../../images/background.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    borderRadius: 12,
    marginTop: theme.spacing(10),
    position: "fixed",
  },
  background: {
    height: 200,
    width: "100%",
  },
  large: {
    height: theme.spacing(14),
    width: theme.spacing(14),
    margin: "-18% auto 1%",
  },
  center: {
    textAlign: "center",
  },
  paperButton: {
    padding: theme.spacing(2),
    marginLeft: theme.spacing(2),
    backgroundColor: "#fff",
    borderRadius: 12,
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 1.325,
  },
  upload: {
    borderRadius: 12,
  },
}));

export default function ProfileCard() {
  const classes = useStyles();
  const [user, setUser] = useState({});
  const authUser = getAuthUser();

  useEffect(() => {
    const fetchUser = async (id) => {
      try {
        const res = await axios(
          process.env.REACT_APP_BASE_URL + `/users/${id}`
        );
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUser(authUser._id);
  });

  //Render
  return (
    <Card className={classes.root}>
      <img className={classes.background} src={backgroundPhoto} alt="" />
      <Avatar alt={user.name} className={classes.large} src={user.image} />
      <CardContent className={classes.center}>
        <Typography gutterBottom variant="h5" component="h2">
          {user.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
      </CardContent>
      <CardActions>
        <ProfileModal />
        <PostModal />
      </CardActions>
    </Card>
  );
}
