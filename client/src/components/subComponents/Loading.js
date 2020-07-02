import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3),
  },
}));

export default function Loading() {
  const classes = useStyles();
  return <CircularProgress disableShrink className={classes.root} />;
}
