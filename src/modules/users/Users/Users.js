import UsersView from './UsersView';
import { useDispatch, useSelector } from 'react-redux';
import { modalSelector, userDialogToggle } from '_common/features/modal/modalSlice';


const Users = () => {
  const { userDialogIsOpen } = useSelector(modalSelector);
  const dispatch = useDispatch();

  const handleOpenUserDialog = () => dispatch(userDialogToggle());

  return <UsersView {...{ userDialogIsOpen, handleOpenUserDialog }} />;
};

export default Users;
