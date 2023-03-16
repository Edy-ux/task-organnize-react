import Button from "@material-ui/core/Button";
import PageHeader from "_common/components/PageHeader";
import UsersListFilter from "./UsersListFilter";
import UsersListTableView from "./UsersListTable/UsersListTableView";


const UsersListView = () => {
  const newButton = <Button>Novo</Button>
  return (
    <div>
      <PageHeader title="Usuários" actionButton={newButton} />
      <UsersListFilter />
      <UsersListTableView />
    </div>
  )
};

export default UsersListView;