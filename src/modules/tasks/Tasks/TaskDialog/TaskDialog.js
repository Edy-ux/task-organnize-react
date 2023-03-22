import { useTasksContext } from '../context/TasksContext';
import TaskDialogView from './TaskDialogView';

const TaskDialog = () => {
  const { taskDialog, setTaskDialog } = useTasksContext();

  const handleOnCloseDialog = () => setTaskDialog({ open: false });

  return <TaskDialogView {...{ handleOnCloseDialog }} />;
};

export default TaskDialog;
