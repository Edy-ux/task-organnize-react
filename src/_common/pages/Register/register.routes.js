import { Route, Switch } from 'react-router-dom';

import RegisterComponet from './Register';

const RegisterRoutes = ({ match: { url } }) => {
  return (
    <Switch>
      <Route path={`${url}/`} component={RegisterComponet} />
    </Switch>
  );
};

export default RegisterRoutes;
