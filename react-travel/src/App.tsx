import React from 'react';
import styles from './App.module.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomePage, SignInPage, RegisterPage, DetailPage, SearchPage, ShoppingCart } from './pages';
import { Redirect } from 'react-router-dom';
import { useSelector } from './redux/hooks';

const PrivateRoute = ({ component, isAuthenticated, ...rest }) => {
  const routeComponent = (props) => {
    return isAuthenticated ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={{ pathname: '/signIn' }} />
    )
  }
  return <Route render={routeComponent} />;
}

function App() {
  const jwt = useSelector((s) => s.user.token)
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/signIn" component={SignInPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/detail/:touristRouteId" component={DetailPage} />
          <Route path="/SearchPage/:keywords?" component={SearchPage} />
          <PrivateRoute
          isAuthenticated={jwt !== null}
          path='/shoppingCart' component={ShoppingCart} />
          <Route render={() => <h1>404 not found页面去火星了</h1>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;