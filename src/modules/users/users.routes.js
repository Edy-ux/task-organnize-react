import { Route, Switch } from 'react-router-dom';
import UsersComponent from './Users';

const UsersRoutes = ({ match: { url } }) => {
  return (
    <Switch>
      <Route path={`${url}/`} component={UsersComponent} />
    </Switch>
  );
};

export default UsersRoutes;
