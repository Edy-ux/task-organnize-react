import { Button } from '@material-ui/core';
import PageHeader from '_common/components/PageHeader';
import TaskDialog from './TaskDialog';
import TasksFilter from './TasksFilter/TasksFilter';
import TasksTable from './TaskTable/TasksTable';
import { useState } from 'react';

const TasksView = ({ taskDialog, handleNew }) => {

  const newButton = <Button onClick={handleNew}>Nova</Button>;

  return (
    <>
      <PageHeader title="Tarefas" actionButton={newButton} />
      <TasksFilter />
      <TasksTable />
      {false && <TaskDialog />}
    </>
  );
};

export default TasksView;
