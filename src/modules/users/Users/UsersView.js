import Button from '@material-ui/core/Button';
import PageHeader from '_common/components/PageHeader';
import UserDialog from './UserDialog';
import UsersFilter from './UsersFilter';
import UsersTable from './UsersTable';

const UsersView = ({ handleNewUser, userDialogIsOpen }) => {
  const newButton = <Button onClick={handleNewUser}>Novo</Button>;

  return (
    <>
      <PageHeader title="Usuários" actionButton={newButton} />
      <UsersFilter />
      <UsersTable />
      {userDialogIsOpen && <UserDialog />}
    </>
  );
};

export default UsersView;
