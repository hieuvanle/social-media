import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/mainComponents/NavBar";
import HomePage from "./components/mainComponents/HomePage";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import indigo from "@material-ui/core/colors/indigo";
import { useDispatch } from "react-redux";
import { authentication } from "./redux/auth/actions";

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: {
      main: "#536dfe",
    },
  },
});

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authentication());
  });
  return (
    <ThemeProvider theme={theme}>
      <Router basename="/forum-client">
        <div>
          <NavBar />
          <Switch>
            <Route path="/" component={HomePage}></Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
