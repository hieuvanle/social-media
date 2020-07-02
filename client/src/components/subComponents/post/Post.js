import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import IconButton from "@material-ui/core/IconButton";
import { useSelector } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import getAuthUser from "../../../services/getAuthUser";

const useStyles = makeStyles((theme) => ({
  subPaper: {
    padding: theme.spacing(3),
    borderRadius: 12,
    margin: theme.spacing(3),
  },
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
  },
  title: {
    lineHeight: 1.5,
    fontWeight: 700,
  },
  content: {
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "20px",
  },
  alignPost: {
    textAlign: "left",
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

function Post(props) {
  const authState = useSelector((state) => state.authState);
  const classes = useStyles();

  //Menu
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  //Render
  return (
    <Paper className={classes.subPaper} elevation={2}>
      <Grid container spacing={3}>
        <Grid item xs={2} className={classes.center}>
          <Avatar
            alt={props.author.name}
            className={classes.large}
            src={props.author.image}
          />
        </Grid>
        <Grid item xs={7}>
          <div className={classes.alignPost}>
            <Typography className={classes.title} variant="h6">
              {props.title}
            </Typography>
            <Typography className={classes.content} variant="body1">
              {props.content}
            </Typography>
          </div>
        </Grid>
        <Grid item xs={2} className={classes.center}>
          <IconButton color="inherit">
            <ThumbUpIcon fontSize="small" color="secondary" />
          </IconButton>
          <IconButton color="inherit">
            <ThumbDownIcon fontSize="small" color="secondary" />
          </IconButton>
        </Grid>
        <Grid item xs={1} className={classes.center}>
          <IconButton onClick={handleMenu} color="inherit">
            <MoreVertIcon
              fontSize="small"
              color="action"
              onClick={handleMenu}
            />
          </IconButton>
        </Grid>
        <div>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={open}
            onClose={handleClose}
          >
            {authState.isAuth && props.author._id === getAuthUser()._id ? (
              <div>
                <MenuItem onClick={handleClose}>Edit</MenuItem>
                <MenuItem onClick={handleClose}>Delete</MenuItem>
              </div>
            ) : (
              <MenuItem>See More</MenuItem>
            )}
          </Menu>
        </div>
      </Grid>
    </Paper>
  );
}

export default Post;
