import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getTasks } from '_common/features/tasks/tasksSlice';
import { useTasksContext } from './context/TasksContext';
import TasksView from './TasksView';

const Tasks = () => {
  const { taskDialog, setTaskDialog } = useTasksContext();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  const handleNew = () => setTaskDialog({ open: !taskDialog.open });
  return (
    <>
      <TasksView {...{ taskDialog, handleNew }} />
    </>
  );
};

export default Tasks;
