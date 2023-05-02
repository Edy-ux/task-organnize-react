import { Route, Switch } from 'react-router-dom';

import LoginComponent from './Login';

const LoginRoutes = ({ match: { url } }) => {
  return (
    <Switch>
      <Route path={`${url}/`} component={LoginComponent} />
    </Switch>
  );
};

export default LoginRoutes;
