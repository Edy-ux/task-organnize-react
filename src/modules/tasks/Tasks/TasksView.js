import { Button } from '@material-ui/core';
import TaskDialog from './TaskDialog';
import TasksTable from './TaskTable/TasksTable';
import PageHeader from '_common/components/PageHeader';
import Search from '_common/components/Search/Search';

const TasksView = ({ taskDialog, handleNew }) => {
  const newButton = <Button onClick={handleNew}>Nova</Button>;

  return (
    <>
      <PageHeader title="Tarefas" actionButton={newButton} />
      <Search module="tasks" placeholder="Digite nome da tarefa" />
      <TasksTable />
      {false && <TaskDialog />}
    </>
  );
};

export default TasksView;
