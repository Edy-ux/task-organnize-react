import { Route, Switch } from 'react-router-dom';

const TasksRoutes = ({ match: { url } }) => {

  return (
    <Switch>
      <Route path={`${url}/`} component={() => <>Tasks</>} />
    </Switch>
  );
};
export default TasksRoutes
