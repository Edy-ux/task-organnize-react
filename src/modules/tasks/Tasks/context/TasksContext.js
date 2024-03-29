import { createContext, memo, useContext, useState } from 'react';

export const TasksContext = createContext({});
TasksContext.displayName = 'TasksContext';

const useProviderTasks = () => {
  const [tasks, setTasks] = useState(null);
  const [taskDialog, setTaskDialog] = useState({ open: false });

  return {
    tasks,
    setTasks,
    taskDialog,
    setTaskDialog
  };
};

const ProviderTasksContext = memo(({ children }) => {
  const context = useProviderTasks();
  return <TasksContext.Provider value={context}>{children}</TasksContext.Provider>;
});

export const useTasksContext = () => useContext(TasksContext);

export default ProviderTasksContext;
