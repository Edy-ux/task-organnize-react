import Button from '@material-ui/core/Button';
import PageHeader from '_common/components/PageHeader';
import UserDialog from './UserDialog';
import UsersFilter from './UsersFilter';
import UsersTable from './UsersTable';

const UsersView = ({ handleOpenUserDialog, userDialogState }) => {
  
  const newButton = <Button onClick={handleOpenUserDialog}>Novo</Button>;

  return (
    <>
      <PageHeader title="Usuários" actionButton={newButton} />
      <UsersFilter />
      <UsersTable />
      {userDialogState.open && <UserDialog />}
    </>
  );
};

export default UsersView;
