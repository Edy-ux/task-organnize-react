import Button from '@material-ui/core/Button';
import PageHeader from '_common/components/PageHeader';
import UserListFilter from './UserListFilter';
import useStyles from './UserListFilter/UsersListFilterStyle';
import UserListTable from './UserListTable';

const UsersListView = () => {
  const newButton = <Button>Novo</Button>;
  const classes = useStyles()
  return (
    <div >
      <PageHeader title="Usuários" actionButton={newButton} />
      <UserListFilter />
      <UserListTable />
    </div>
  );
};

export default UsersListView;
