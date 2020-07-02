import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import Paper from "@material-ui/core/Paper";
import Post from "./Post";
import Loading from "../Loading";

const useStyles = makeStyles((theme) => ({
  paperList: {
    padding: theme.spacing(2),
    borderRadius: 12,
    minHeight: "120vh",
    textAlign: "center",
    marginTop: theme.spacing(10),
  },
}));

export default function PostList() {
  const classes = useStyles();

  //Manage states
  const postState = useSelector((state) => state.postState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "GET_POSTS" });
  }, []);

  //Render
  return (
    <Paper className={classes.paperList} elevation={1}>
      {postState.loading ? (
        <Loading />
      ) : (
        postState.posts.map((post) => (
          <Post
            key={post._id}
            title={post.title}
            content={post.content}
            author={post.author}
          />
        ))
      )}
    </Paper>
  );
}
