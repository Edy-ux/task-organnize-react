import React from 'react';
import './RegisterStyle.css';
import { useHistory } from 'react-router-dom';

export default function RegisterView({ formik, name }) {
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
    <div className="register">
      <h1>Task Organnize</h1>
      <div className="register__container">
        <h2>Cadastre-se</h2>
        <p>É rápido e fácil.</p>
        <span className="hr3"></span>
        <form onSubmit={formik?.handleSubmit}>
          <div className="row">
            <input placeholder="Nome" onChange={formik.handleChange} type="text" value={formik?.valuesfirstName} name="firstName" />
            <input placeholder="Sobrenome" onChange={formik.handleChange} type="text" value={formik?.values.lastName} name="lastName" />
          </div>
          <div className="column">
            <input onChange={formik.handleChange} required value={formik?.values.email} type="email" placeholder="Email" name="email" />
            <input
              onChange={formik.handleChange}
              value={formik?.values.password}
              type="password"
              placeholder="Senha"
              required
              name="password"
            />
          </div>
          <p className="register__policy">
            Ao clicar em Cadastre-se, você concorda com nossos <span>Termos, Politica de Dados</span> e<span> Politica de Cookies</span>.
          </p>

          <center>
            <button type="submit" className="register__register" disabled={formik?.isSubmitting}>
              Cadastre-se
            </button>
          </center>
        </form>
      </div>
    </div>
  );
}
