import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from "styled-components";
import { themeSchema } from './styles';
import { Provider } from "react-redux";
import GlobalStyle from './styles/global';
import store from "./store";
import App from './routes';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={themeSchema}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
