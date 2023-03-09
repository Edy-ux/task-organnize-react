import { Route, Switch } from 'react-router-dom';
import TaskList from "modules/tasks/TaskList";
const TasksRoutes = ({ match: { url } }) => {

  return (
    <Switch>
      <Route path={`${url}/`} component={TaskList} />
    </Switch>
  );
};
export default TasksRoutes
