import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import EmptyBox from '_common/lotties/EmptyBox';
import useStyles from './UsersTableStyle';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Grid } from '@material-ui/core';
import FormatDate from '_common/utils/formatDate';
import ConfirmationDialog from '_common/components/ConfirmationDialog';
import { GridLoader } from 'react-spinners';



const override = {
  display: "block",
  margin: " 3rem auto",
};

const UsersTableView = ({
  error,
  loading,
  handleCloseConfirmation,
  users,
  handleSelectUserDelete,
  handleEdit,
  confirmationDialogIsOpen,
  userDialogState,
  handleDeleteConfirmation
}) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.root}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Data Criação</TableCell>
            <TableCell width={200} align="center">
              Ações
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody className={classes.tbody}>
          {error ? (
            <center>
              <>Ops! Ocorreu um error</>
            </center>
          ) : (
            users?.map((user) => {
              const { creation, _id, email, name } = user;
              return (
                <TableRow key={_id} hover>
                  <TableCell component="th" scope="row">
                    {name}
                  </TableCell>
                  <TableCell>{email}</TableCell>
                  <TableCell>{FormatDate.formatDateCreatedAt(creation)}</TableCell>
                  <TableCell align="center">
                    <Grid>
                      <EditIcon cursor="pointer" onClick={() => handleEdit(user)} />
                      <DeleteIcon cursor="pointer" onClick={() => handleSelectUserDelete(user)} />
                    </Grid>
                  </TableCell>
                </TableRow>
              );
            })
          )}
        </TableBody>

      </Table>
      <GridLoader
        cssOverride={override}
        color="#36d7b7"
        loading={loading}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      {(!error && !loading && users && !users.length) && <EmptyBox />}
      {confirmationDialogIsOpen && (
        <ConfirmationDialog
          title={`Deseja deletar o usuário ${userDialogState.name}? `}
          text={'Depois de exclúido a ação não poderá ser desfeita'}
          {...{ handleDeleteConfirmation, handleCloseConfirmation }}
        />
      )}
    </TableContainer>
  );
};

export default UsersTableView;
