import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import CssBaseline from "@material-ui/core/CssBaseline";
import axios from "axios";
import Alert from "@material-ui/lab/alert";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { useDispatch } from "react-redux";
import { setToken, authentication } from "../../../redux/auth/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "left",
  },
  loginPaper: {
    borderRadius: 12,
    padding: theme.spacing(4),
    marginTop: theme.spacing(10),
    position: "fixed",
    maxWidth: "25vw",
  },
  form: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(1.5, 0, 1),
    borderRadius: 14,
  },
  centerText: {
    textAlign: "center",
    fontWeight: 300,
  },
}));

function LoginForm() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [success, setSuccess] = useState(null);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

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
      const res = await axios.post(
        process.env.REACT_APP_BASE_URL + "/auth/login",
        user
      );
      dispatch(setToken(res.data));
      dispatch(authentication());
    } catch (err) {
      setSuccess(false);
      console.log(err);
    }
  };

  //Render
  return (
    <Paper className={classes.loginPaper} elevation={1}>
      <CssBaseline />
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      {success === false ? <Alert severity="error">Login failed!</Alert> : null}
      <form onSubmit={onSubmit} className={classes.form}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          value={user.email}
          onChange={onChange}
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          type="password"
          id="password"
          label="Password"
          value={user.password}
          onChange={onChange}
          name="password"
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Sign in
        </Button>
        <Link href="#" variant="body2">
          Forgot password?
        </Link>
      </form>
    </Paper>
  );
}

export default LoginForm;
