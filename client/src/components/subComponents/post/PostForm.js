import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from "react-redux";
import jwtDecode from "jwt-decode";
import axios from "axios";
import Alert from "@material-ui/lab/alert";

const useStyles = makeStyles((theme) => ({
  buttonMargin: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
}));

function PostForm() {
  const classes = useStyles();
  const authState = useSelector((state) => state.authState);
  const dispatch = useDispatch();
  const [post, setPost] = useState({
    author: "",
    title: "",
    content: "",
  });
  const [success, setSuccess] = useState(null);
  const onChange = (e) => {
    const { name, value } = e.target;
    const decodedId = jwtDecode(authState.token)._id;
    setPost({
      ...post,
      author: decodedId,
      [name]: value,
    });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        process.env.REACT_APP_BASE_URL + `/users/${post.author}/posts`,
        post
      );
      dispatch({ type: "GET_POSTS" });
      setPost({
        author: "",
        title: "",
        content: "",
      });
      setSuccess(true);
    } catch (err) {
      setSuccess(false);
      console.log(err);
    }
  };
  //Render
  return (
    <div>
      <form className={classes.form} onSubmit={onSubmit}>
        <Typography variant="h6">New Discussion</Typography>
        {success === true ? (
          <Alert severity="success">Post successfully!</Alert>
        ) : success === false ? (
          <Alert severity="error">Post failed!</Alert>
        ) : null}
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="title"
          label="Title"
          name="title"
          value={post.title}
          onChange={onChange}
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="content"
          label="Content"
          name="content"
          value={post.content}
          onChange={onChange}
          autoFocus
        />
        <Button
          className={classes.buttonMargin}
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          Post
        </Button>
      </form>
    </div>
  );
}

export default PostForm;
