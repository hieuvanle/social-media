import React from "react";
import { useSelector } from "react-redux";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import LoginForm from "../subComponents/login/LoginForm";
import ProfileCard from "../subComponents/profile/ProfileCard";
import LoginFAB from "../subComponents/login/LoginFAB";
import PostList from "../subComponents/post/PostList";
import ProfileFAB from "../subComponents/profile/ProfileFAB";

function HomePage() {
  const matches = useMediaQuery("(min-width:960px)");

  //Manage states
  const authState = useSelector((state) => state.authState);

  //Render
  return (
    <div>
      <Container>
        {!matches ? (
          <div>
            <PostList />
            {!authState.isAuth ? <LoginFAB /> : <ProfileFAB />}
          </div>
        ) : (
          <Grid container spacing={6}>
            <Grid item md={4} sm={12}>
              {!authState.isAuth ? <LoginForm /> : <ProfileCard />}
            </Grid>
            <Grid item md={8} sm={12}>
              <PostList />
            </Grid>
          </Grid>
        )}
      </Container>
    </div>
  );
}

export default HomePage;
