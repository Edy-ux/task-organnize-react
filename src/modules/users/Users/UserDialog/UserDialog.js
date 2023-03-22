import { useFormik } from 'formik';
import UserDialogView from './UserDialogView';
import UserService from 'modules/users/services/user.services';
import Yup from '_common/utils/yupValidator';
import useSnackbarContext from '_common/components/Snackbar/context/SnackbarContext';
import { useUsersContext } from '../context/UsersContext';
import useSnackbar from '_common/hooks/useSnackbar';

const validationSchema = Yup.object().shape({
  name: Yup.string().max(50).required(),
  email: Yup.string().email().required(),
  password: Yup.string()
    .max(30)
    /*check if the user already exists and does not require a password, if there is no password it is required.*/
    .when('_id', {
      is: (_id) => !!_id,
      then: Yup.string(),
      otherwise: Yup.string().required()
    })
});

const UserDialog = () => {
  const { setUsers, setUserDialog, userDialogState } = useUsersContext();

  const { snackbar, snackbarSuccess } = useSnackbar();
  const { snackbarState, setSnackbarState } = useSnackbarContext();
  const handleOnCloseDialog = () => setUserDialog({ open: false });

  const initialValues = {
    name: '',
    email: '',
    password: ''
  };

  const onSubmit = async (payload, { setSubmitting }) => {
    try {
      if (payload._id) {
        await UserService.put(payload);
        setUsers((prevUsers) => prevUsers.map((user) => (user._id === payload._id ? payload : user)));
      } else {
        const {data: { body: userResponse }} = await UserService.post(payload);
        setUsers((prevUsers) => [...prevUsers, userResponse]);
        snackbar("Usuário cadastrado")
      }
      handleOnCloseDialog();
    } catch ({ response: { data } }) {
      snackbar(data.message);
    } finally {
      setSubmitting(false);
    }
  };

  const formik = useFormik({
    validationSchema,
    initialValues: userDialogState?.user || initialValues,
    onSubmit
  });

  return <UserDialogView {...{ handleOnCloseDialog, formik }} />;
};

export default UserDialog;
