import Button from "@material-ui/core/Button";
import PageHeader from "_common/components/PageHeader";


const UsersListView = () => {

  const newButton = <Button>Novo</Button>
  return <PageHeader title="Usuários" actionButton={newButton} />
};

export default UsersListView;
