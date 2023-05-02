import { useFormik } from 'formik';
import UserDialogView from './UserDialogView';
import UserService from 'modules/users/services/user.services';
import Yup from '_common/utils/yupValidator';
import useSnackbar from '_common/hooks/useSnackbar';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, updateUser } from '_common/features/users/usersSlice';
import { modalSelector, setUserDialogState, userDialogToggle } from '_common/features/modal/modalSlice';

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
  const { snackbar, snackbarSuccess, snackbarError } = useSnackbar();
  const { userDialogState } = useSelector(modalSelector);
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    email: '',
    password: ''
  };
  const handleOnCloseDialog = () => {
    dispatch(userDialogToggle());
    dispatch(setUserDialogState(null));
  };

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      if (values._id) {
        dispatch(updateUser({ id: values._id, changes: { ...values } }));
        snackbarSuccess();
      } else {
        const {
          data: { body }
        } = await UserService.post(values);
        const { password, ...user } = body;
        dispatch(addUser(user));
        snackbar('Usuário cadastrado');
      }
    } catch ({ response: { data } }) {
    } finally {
      setSubmitting(false);
    }
  };

  const formik = useFormik({
    validationSchema,
    initialValues: userDialogState || initialValues,
    onSubmit
  });

  return <UserDialogView {...{ handleOnCloseDialog, formik }} />;
};

export default UserDialog;
