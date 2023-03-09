import { Button } from "@material-ui/core";

const { default: PageHeader } = require("_common/components/PageHeader");

const TaskListView = ({ title }) => {
  const newButton = <Button>Nova</Button>
  return (
    <>
      <PageHeader title="Tarefas" actionButton={newButton} />
    </>
  )

}
export default TaskListView;