import React from "react";
import "./App.scss";
import ScrollToTop from "./ScrollToTopController";
import { BrowserRouter } from "react-router-dom";
import "./aos";
import { ThemeProvider } from "@material-ui/core/styles";
import store from "../store/store";
import { Provider } from "react-redux";
import { theme } from "./materialTheme";

const AppWrapper = props => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <ScrollToTop>
          <Provider store={store}>{props.children}</Provider>
        </ScrollToTop>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default AppWrapper;
