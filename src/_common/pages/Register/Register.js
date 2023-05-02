import { useState } from 'react';
import { useFormik } from 'formik';
import UserService from 'modules/users/services/user.services';
import Yup from '_common/utils/yupValidator';
import { useDispatch, useSelector } from 'react-redux';
import { modalSelector, setUserIsLogged } from '_common/features/modal/modalSlice';
import RegisterView from './RegisterView';
import { useMemo } from 'react';
import { useHistory } from 'react-router-dom/';

const validationSchema = Yup.object().shape({
  firstName: Yup.string().max(50).required(),
  lastName: Yup.string().max(50).required(),
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

const Register = () => {
  const { userDialogState } = useSelector(modalSelector);
  const dispatch = useDispatch();
  const history = useHistory('');

  const [name, setName] = useState({
    firstName: '',
    lastName: ''
  });

  const initialValues = useMemo(() => {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    };
  }, []);

  const handleChangeName = (e) => {
    const { name, value } = e.target;
    setName((prev) => Object.assign({}, prev, { [name]: value }));
  };

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      const { firstName, lastName, ...rest } = values;
      const {
        data: { body }
      } = await UserService.post({ name: `${firstName} ${lastName}`, ...rest });
      console.log('Values', body);
      await setTimeout(() => {}, 2000);
      history.push('/login');
    } catch ({ response: { data } }) {
      console.log(data);
    } finally {
      setSubmitting(false);
    }
  };
  const formik = useFormik({
    validationSchema,
    initialValues: userDialogState || initialValues,
    onSubmit
  });

  return <RegisterView {...{ formik, handleChangeName, name }} />;
};

export default Register;
