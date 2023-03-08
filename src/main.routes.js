import { lazy } from 'react';
import { Redirect, Route, Switch, Link, BrowserRouter, useParams, useRouteMatch } from 'react-router-dom';
import LazyLoading from '_common/components/LazyLoading/';

const DashboardRoutes = lazy(() => import('modules/dashboard/dashboard.routes'));
const TasksRoutes = lazy(() => import('modules/tasks/tasks.routes'));
const UsersRoutes = lazy(() => import('modules/users/users.routes'));

const MainRoutes = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/dashboard">dashboard</Link></li>
          <li><Link to="/tarefas">tarefas</Link></li>
          <li><Link to="/usuarios">usuarios</Link></li>
        </ul>
      </nav>

      <Switch>
        <Route path="/dashboard" component={LazyLoading(DashboardRoutes)} />
        <Route path="/tarefas" component={LazyLoading(TasksRoutes)} />
        <Route path="/usuarios" component={LazyLoading(UsersRoutes)} />
        <Redirect to="/tarefas" />
      </Switch>

    </div>

  );
};

export default MainRoutes;
