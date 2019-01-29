import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './reducers/configureStore';
import SearchBar from './components/searchBar';
import SearchList from './components/searchList';
import ItemDetail from './components/itemDetail';
import './styles/styles.scss';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Fragment>
        <Switch>
          <Route exact path="/" component={SearchBar} />
          <Route path="/items/:id" component={ItemDetail} />
          <Route path="/items" component={SearchList} />
        </Switch>
      </Fragment>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
