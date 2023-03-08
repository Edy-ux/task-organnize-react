import { Route, Switch } from 'react-router-dom';/* 
import UsersList from './UsersList';
import {  } from './UsersList/context/UsersListContext';
 */
const UsersRoutes = ({ match: { url } }) => {
  return (

    <Switch>
      <Route path={`${url}/`} component={() => <>Users</>} />
    </Switch>
  );
};

export default UsersRoutes;
