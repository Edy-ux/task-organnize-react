import { Button } from '@material-ui/core';
import LoadingSpinner from '_common/lotties/LoadingSpinner/';
const { default: PageHeader } = require('_common/components/PageHeader');

const TaskListView = () => {
  const newButton = <Button>Nova</Button>;
  return (
    <>
      <PageHeader title="Tarefas" actionButton={newButton} />
      <LoadingSpinner />
    </>
  );
};
export default TaskListView;
