import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { useRoutes } from 'react-router-dom';
import GlobalStyles from './styles';
import routes from './routes';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  const routing = useRoutes(routes);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {routing}
      </ThemeProvider>
    </Provider>
  );
};

export default App;
