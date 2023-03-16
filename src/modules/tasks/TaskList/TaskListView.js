import { Button } from '@material-ui/core';
import EmptyBox from "_common/lotties/EmptyBox";
import PageHeader from '_common/components/PageHeader';

const TaskListView = () => {
  const newButton = <Button>Nova</Button>;
  return (
    <>
      <PageHeader title="Tarefas" actionButton={newButton} />
      <EmptyBox />
    </>
  );
};
export default TaskListView;
