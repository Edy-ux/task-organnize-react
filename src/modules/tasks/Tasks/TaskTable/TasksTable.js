import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { selectAllTasks } from '_common/features/tasks/tasksSlice';
import { selectAllUsers } from '_common/features/users/usersSlice';
import useSnackbar from '_common/hooks/useSnackbar';
import TasksTableView from './TasksTableView';

const TasksTable = () => {
  const [tasks, setTasks] = useState(null);
  const {status} = useParams()
  const data = useSelector(selectAllTasks);


  const { loading, error, searchTermTask } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const { snackbar } = useSnackbar();
 
  // Set tasks if searchTerm is not a string empty. Otherwise set users with data from api
  useEffect(() => {
    if (searchTermTask) {
      const result = data?.filter(
        (task) => task.description.toLowerCase().includes(searchTermTask) || task.responsible.toLowerCase().includes(searchTermTask)
      );
      setTasks(result);
      return;
    }
    setTasks(data);
  }, [searchTermTask, data]);
  return <TasksTableView 
     tasks={tasks}
         />;
};

export default TasksTable;
