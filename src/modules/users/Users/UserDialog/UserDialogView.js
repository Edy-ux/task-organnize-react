import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import useStyles from './UserDialogViewStyle';
import Grid from '@material-ui/core/Grid';
import { TextField } from '@material-ui/core';
import FormatDate from '_common/utils/formatDate';

const UserDialogView = ({ formik, handleOnCloseDialog }) => {
  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Dialog fullWidth maxWidth="xs" open onClose={handleOnCloseDialog}>
        <DialogTitle>{formik.values._id ? 'Editar' : 'Novo'} Usuário</DialogTitle>
        <form onSubmit={formik.handleSubmit} noValidate autoComplete="off">
          <DialogContent dividers>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <TextField
                  label="Nome"
                  name="name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  error={formik.touched.name && !!formik.errors.name}
                  helperText={formik.touched.name && formik.errors.name}
                />
              </Grid>
              <Grid item>
                <TextField
                  label="E-mail"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  error={formik.touched.email && !!formik.errors.email}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>
              <Grid item>
                <TextField
                  type="password"
                  label="Senha"
                  name="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  error={formik.touched.password && !!formik.errors.password}
                  helperText={formik.touched.password && formik.errors.password}
                />
              </Grid>
              {formik.values.creation && (
                <Grid item>
                  <TextField label="Data de Criação" value={FormatDate.formatDateUpdate(formik.values.creation)} disabled />
                </Grid>
              )}
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button color="default" onClick={handleOnCloseDialog}>
              Cancelar
            </Button>
            <Button color="secondary"  autoFocus type="submit" disabled={formik?.isSubmitting}>
              Salvar
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

export default UserDialogView;
