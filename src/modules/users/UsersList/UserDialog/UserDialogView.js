import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import useStyles from './UserDialogViewStyle';
import  Grid  from '@material-ui/core/Grid';
import { TextField } from '@material-ui/core';
import {formatDateUpdate} from '_common/utils/formaDate';

const UserDialogView = ( {form, handleDialog, userDialog })  => {
  const classes = useStyles();
  const theme = useTheme();
  
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  
  return (
    <>
     <Dialog fullWidth maxWidth="xs" open={userDialog} >
      <DialogTitle>{form.values._id ? 'Editar' : 'Novo'} Usuário</DialogTitle>
      <form onSubmit={form.handleSubmit} noValidate autoComplete="off">
        <DialogContent dividers>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <TextField
                label="Nome"
                name="name"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                value={form.values.name}
                error={form.touched.name && !!form.errors.name}
                helperText={form.touched.name && form.errors.name}
              />
            </Grid>
            <Grid item>
              <TextField
                label="E-mail"
                name="email"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                value={form.values.email}
                error={form.touched.email && !!form.errors.email}
                helperText={form.touched.email && form.errors.email}
              />
            </Grid>
            <Grid item>
              <TextField
                type="password"
                label="Senha"
                name="password"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                value={form.values.password}
                error={form.touched.password && !!form.errors.password}
                helperText={form.touched.password && form.errors.password}
              />
            </Grid>
            {form.values.creation && (
              <Grid item>
                <TextField label="Data de Criação" value={formatDateUpdate(new Date(form.values.creation))} disabled />
              </Grid>
            )}
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button color="default" onClick={handleDialog}>
            Cancelar
          </Button>
          <Button autoFocus type="submit" disabled={form?.isSubmitting}>
            Salvar
          </Button>
        </DialogActions>
      </form>
    </Dialog>
    </>
  );
};

export default UserDialogView;
