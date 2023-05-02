import React from 'react';
import '../Register/RegisterStyle.css';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function RegisterView({ formik, name }) {
  const history = useHistory('');
  // console.log(formik.values);
  /*   const register = (event) => {
    event.preventDefault();
    if (birthday.year >= 2010) {
      return alert('You are not eligible to register to Facebook!');
    }
    auth
      .createUserWithEmailAndPassword(values.login.email, values.login.password)
      .then((auth) => {
        if (auth.user) {
          auth.user
            .updateProfile({
              displayName: values.firstName + ' ' + values.lastName,
              photoURL: 'https://i.ibb.co/1zmBtwr/84241059-189132118950875-4138507100605120512-n.jpg'
            })
            .then((s) => {
              db.collection('users')
                .doc(auth.user.uid)
                .set({
                  uid: auth.user.uid,
                  displayName: auth.user.displayName,
                  email: auth.user.email,
                  photoURL: 'https://i.ibb.co/1zmBtwr/84241059-189132118950875-4138507100605120512-n.jpg',
                  gender: values.login.gender,
                  birthday: values.login.birthday,
                  bio: ''
                })
                .then((r) => {
                  history.push('/');
                });
            });
        }
      })
      .catch((e) => {
        console.error('Error: ' + e.message);
      });
  }; */
  return (
    <div className="register w-full min-h-screen bg-[#F3F6F8] ">
      <h1 className="text-3xl font-bold text-black">Task organize</h1>
      <div className="rounded-md shadow-lg w-[450px] p-10">
        <h2>Login</h2>
        <p>Faça login e gerencie suas tarefas.</p>
        <span className="hr3"></span>
        <form onSubmit={formik?.handleSubmit}>
          <div className="column">
            <input onChange={formik.handleChange} required value={formik?.values.email} type="email" placeholder="Email" name="email" />
            <input
              onChange={formik?.handleChange}
              value={formik?.values.password}
              type="password"
              placeholder="Senha"
              required
              name="password"
            />
          </div>

          <center>
            <button type="submit" className="register__register" disabled={formik?.isSubmitting}>
              Entrar
            </button>
          </center>
          <center>
            <div class="sideinfo">
              <h5>Esqueceu a senha?</h5>
              <Link to="/sign-up">
                <button class="sign-up" style={{ textDecoration: 'none' }}>
                  Criar nova conta
                </button>
              </Link>
            </div>
          </center>
        </form>
      </div>
    </div>
  );
}
