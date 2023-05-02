import { useState } from 'react';
import LoginView from './LoginView';
import Yup from '_common/utils/yupValidator';
import { useFormik } from 'formik';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [info, setInfo] = useState('');

  const validationSchema = Yup.object().shape({
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

  const handleChange = () => {};
  const onSubmit = () => {};

  const initialValues = {
    email: '',
    password: ''
  };
  /*  const login = (event) => {
    event.preventDefault();
    if (email === "" || password === "") {
      alert("Entre com um email e uma senha válidos");
      return; 
    }
    auth
      .signInWithEmailAndPassword(email, password)
      .then((a) => {
        history.push("/home");
      })
      .catch(function (error) {	
         // Handle Errors here.
        var errorCode = error.code; 
        var errorMessage = error.message;
        if (errorCode === "auth/wrong-password") {
          setInfo("Senha e/ ou email são inválidos");
        } else {
          errorMessage =	
            "Não há registro de usuário correspondente a este identificador. O usuário pode ter sido excluído ou é inexistente";
          alert(errorMessage);
         
        }
      });
  }; */

  const formik = useFormik({
    validationSchema,
    initialValues: initialValues,
    onSubmit
  });
  return <LoginView {...{ formik, info, setEmail, setInfo, setPassword }} />;
};

export default Login;
