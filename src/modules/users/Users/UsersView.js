import Button from '@material-ui/core/Button';
import PageHeader from '_common/components/PageHeader';
import UserDialog from './UserDialog';
import UsersFilter from './UsersFilter';
import UsersTable from './UsersTable';
import Search from '_common/components/Search/Search';

const UsersView = ({ handleNewUser, userDialogIsOpen }) => {
  const newButton = <Button onClick={handleNewUser}>Novo</Button>;

  return (
    <>
      <PageHeader title="Usuários" actionButton={newButton} />
      <Search placeholder="Pesquise por nome ou email" module="user"
          areaLabel={{ 'aria-label': 'search users' }} />
      <UsersTable />
      {userDialogIsOpen && <UserDialog />}
    </>
  );
};

export default UsersView;
