import { useTasksContext } from './context/TasksContext';
import TasksView from './TasksView';

const Tasks = () => {
  const { taskDialog, setTaskDialog } = useTasksContext();

  const handleNew = () => setTaskDialog({ open: !taskDialog.open});

  return (
    <>
      <TasksView {...{ taskDialog, handleNew }} />
    </>
  );
};

export default Tasks;
