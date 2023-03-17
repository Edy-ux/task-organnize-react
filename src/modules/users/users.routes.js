import { Route, Switch } from 'react-router-dom';
import UsersList from './UsersList';
import  ProviderUsersUsersList from './UsersList/context/useUsersListContext';

const UsersRoutes = ({ match: { url } }) => {
  return (
    <Switch>
      <ProviderUsersUsersList>
        <Route path={`${url}/`} component={UsersList} />
      </ProviderUsersUsersList>
    </Switch>
  );
};

export default UsersRoutes;
