import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './reducers/configureStore';
import Home from './components/home';
import SearchList from './components/searchList';
import ItemDetail from './components/itemDetail';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/items/:id" component={ItemDetail} />
        <Route path="/items" component={SearchList} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
