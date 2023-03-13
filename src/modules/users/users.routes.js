import { Route, Switch } from 'react-router-dom'


import UsersList from './UsersList';

//users sub routes
const UsersRoutes = ({ match: { url} }) => {


  return (
    <Switch>
      <Route path={`${url}/`} component={UsersList} />
    </Switch>
  );
};

export default UsersRoutes;
