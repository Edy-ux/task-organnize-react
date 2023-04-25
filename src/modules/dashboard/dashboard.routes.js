import { Route, Switch } from 'react-router-dom';
import DashBoard from './DashBoard';

const DashboardRoutes = ({ match: { url } }) => {
  return (
    <Switch>
      <Route path={`${url}/`} component={DashBoard} />
    </Switch>
  );
};
export default DashboardRoutes;
