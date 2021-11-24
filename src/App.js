import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { createMuiTheme, StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import {AnimatedSwitch} from 'react-router-transition';

import  store  from './redux/store';

import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { Homepage } from './components/views/Homepage/Homepage';
import { Product } from './components/views/Product/Product';
import { Products } from './components/views/Products/Products';
import { Cart} from './components/features/Cart/Cart';
import { OrderSummary } from './components/features/OrderSummary/OrderSummary';
import { NotFound } from './components/views/NotFound/NotFound';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#C0C0C0' },
  },
});

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <MainLayout>
            <AnimatedSwitch
              atEnter={{ opacity: 0 }}
              atLeave={{ opacity: 1 }}
              atActive={{ opacity: 1 }}
            >
              <Route exact path='/home' component={Homepage} />
              <Route exact path='/products' component={Products} />
              <Route exact path='/products/:id' component={Product} />
              <Route exact path='/cart' component={Cart} />
              <Route exact path='/order' component={OrderSummary} />
              <Route path='*' component={NotFound} />
            </AnimatedSwitch>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  </Provider>
);

export { App };