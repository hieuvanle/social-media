import React, { useState } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Alert from "@material-ui/lab/alert";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "left",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  buttonMargin: {
    margin: theme.spacing(1, 0, 2),
  },
}));

function LoginForm(props) {
  const classes = useStyles();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [success, setSuccess] = useState(null);
  const onChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(process.env.REACT_APP_BASE_URL + "/auth/register", user);
      setSuccess(true);
      setUser({
        name: "",
        email: "",
        password: "",
      });
    } catch (err) {
      console.log(err);
      setSuccess(false);
    }
  };

  //Render
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline></CssBaseline>
      <Typography component="h1" variant="h5">
        Create your account
      </Typography>
      {success === true ? (
        <Alert severity="success">Register successfully!</Alert>
      ) : success === false ? (
        <Alert severity="error">Register failed!</Alert>
      ) : null}
      <form className={classes.form} onSubmit={onSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="name"
          label="Full Name"
          name="name"
          value={user.name}
          onChange={onChange}
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          type="email"
          name="email"
          value={user.email}
          onChange={onChange}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          type="password"
          id="password"
          label="Password"
          name="password"
          value={user.password}
          onChange={onChange}
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          labelPlacement="end"
          label="I accept the Terms of Use & Private Policy"
          className={classes.removePadding}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.buttonMargin}
        >
          Sign Up
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2" onClick={props.closeModal}>
              Already a member? Sign In
            </Link>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default LoginForm;
