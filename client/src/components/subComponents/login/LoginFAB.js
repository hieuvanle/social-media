import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { Toolbar } from "@material-ui/core";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: "auto",
    bottom: 0,
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    margin: theme.spacing(1.5, 1, 1),
    borderRadius: 14,
    width: "30%",
  },
}));

export default function LoginFAB() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar position="fixed" color="#fff" className={classes.appBar}>
        <Toolbar>
          <Container className={classes.container}>
            <Button
              variant="outlined"
              color="primary"
              className={classes.button}
            >
              Sign in
            </Button>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Sign up
            </Button>
          </Container>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
