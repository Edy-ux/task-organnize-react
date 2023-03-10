import { Route, Switch, useParams } from 'react-router-dom'



import UsersList from './UsersList';

//users sub routes
const UsersRoutes = ({ match: { url, params} }) => {

  return (
    <Switch>
      <Route path={`${url}/`} component={UsersList} />
    </Switch>
  );
};

export default UsersRoutes;
