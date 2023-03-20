import { useFormik } from 'formik';
import UserDialogView from './UserDialogView';
import UserService from 'modules/users/services/user.services';
import useSnackbar from '_common/hooks/useSnackbar';
import { useUsersListContext } from 'modules/users/UsersList/context/useUsersListContext';
import Yup from '_common/utils/yupValidator';


const validationSchema = Yup.object().shape({
  name: Yup.string().max(50).required(),
  email: Yup.string().email().required(),
  password: Yup.string()
  
  /* check if the user already exists and does not require a password, if there is no password it is required.*/
    .max(30)
    .when('_id', {
      is: (_id) => !!_id, 
      then: Yup.string(),
      otherwise: Yup.string().required()  
    })
});

const initialuser = {
  name: '',
  email: '',
  password: ''
};

const UserDialog = () => {
  const { setUsers, setUserDialog, userDialog } = useUsersListContext();

  const { snackbar, snackbarSuccess } = useSnackbar();

  const handleDialog = () => setUserDialog({ open: false });

  const onSubmit = async (user, { setSubmitting }) => {
    try {
      if (user._id) {
        await UserService.put(user);
        updateUsersContext(user);
      } else {
        const {data: { body }} = await UserService.post(user);
        updateUsersContext(body, true);
      }

      handleDialog();
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
    initialuser: userDialog.user || initialuser,
    onSubmit
  });

  return <UserDialogView {...{ form, handleDialog, userDialog }} />;
};

export default UserDialog;
