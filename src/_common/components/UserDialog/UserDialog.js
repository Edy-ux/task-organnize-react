import { useFormik } from 'formik';
import UserDialogView from './UserDialogView';
import UserService from 'modules/users/services/user.services';
import useSnackbar from '_common/hooks/useSnackbar';
import {useUsersListContext} from 'modules/users/UsersList/context/useUsersListContext';
import Yup from '_common/utils/yupValidator';


const UserDialog = () => {
  const { setUsers, setUserDialog, userDialog } = useUsersListContext();

  const { snackbar, snackbarSuccess } = useSnackbar();

  const handleOnClose = () => setUserDialog({ open: false });

  const validationSchema = Yup.object().shape({
    name: Yup.string().max(50).required(),
    email: Yup.string().email().required(),
    password: Yup.string()
      .max(30)
      .when('_id', {
        is: (_id) => !!_id,
        then: Yup.string(),
        otherwise: Yup.string().required()
      })
  });

  const initialValues = {
    name: '',
    email: '',
    password: ''
  };

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      if (values._id) {
        await UserService.put(values);
        updateUsersContext(values);
      } else {
        const {
          data: { body }
        } = await UserService.post(values);
        updateUsersContext(body, true);
      }

      handleOnClose();  
      snackbarSuccess();
    } catch ({ response: { data } }) {
      snackbar(data.message);
    } finally {
      setSubmitting(false);
    }
  };

  const updateUsersContext = (user, isNew) => {
    if (isNew) {
      setUsers((prevUsers) => [...prevUsers, user]);
    } else {
      setUsers((prevUsers) => prevUsers.map((prevUser) => (prevUser._id === user._id ? user : prevUser)));
    }
  };

  const form = useFormik({
    validationSchema,
    initialValues: userDialog.user || initialValues,
    onSubmit
  });

  return <UserDialogView {...{ form, handleOnClose }} />;
};

export default UserDialog;
