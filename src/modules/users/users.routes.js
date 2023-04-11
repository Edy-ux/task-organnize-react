import { Route, Switch } from 'react-router-dom';
import UsersComponent from './Users';
import ProviderUsersContext from './Users/context/UsersContext';

const UsersRoutes = ({ match: { url } }) => {
  return (
    <Switch>
      <ProviderUsersContext>
        <Route path={`${url}/`} component={UsersComponent} />
      </ProviderUsersContext>
    </Switch>
  );
};

export default UsersRoutes;
