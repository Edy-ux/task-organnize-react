import { Button } from '@material-ui/core';
import EmptyBox from '_common/lotties/EmptyBox';
import PageHeader from '_common/components/PageHeader';
import TaskDialog from './TaskDialog';

const TasksView = ({ taskDialog, handleNew }) => {
  
  const newButton = <Button onClick={handleNew}>Nova</Button>;

  return (
    <>
      <PageHeader title="Tarefas" actionButton={newButton} />
      <EmptyBox />
      {taskDialog.open && <TaskDialog />}
    </>
  );
};

export default TasksView;
