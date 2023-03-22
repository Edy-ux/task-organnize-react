/* Marerial-ui */
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import EmptyBox from '_common/lotties/EmptyBox';
import LoadingSpinner from '_common/lotties/LoadingSpinner';
import useStyles from './UsersTableStyle';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

//Components
import NetworkFailed from '_common/lotties/NetworkFailed';
import { Grid, useTheme } from '@material-ui/core';
import FormatDate from '_common/utils/formatDate';
import { memo, useCallback } from 'react';
import ConfirmationDialog from '_common/components/ConfirmationDialog';

const UsersTableView = memo(
  ({ setUserDeleteId, handleClose, users, navigatorIsOnline, handleOnSelectUserId, handleEdit, userDelete, handleDeleteConfirmation }) => {
    const classes = useStyles();

    console.log('render');
    return (
      <TableContainer component={Paper} className={classes.root}>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              {users && (
                <>
                  <TableCell>Nome</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Data Criação</TableCell>
                  <TableCell width={200} align="center">
                    Ações
                  </TableCell>
                </>
              )}
            </TableRow>
          </TableHead>
          <TableBody className={classes.tbody}>
            {users?.map((user) => {
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
                      <DeleteIcon cursor="pointer" onClick={handleOnSelectUserId({_id})} />
                    </Grid>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        {!users && navigatorIsOnline && <LoadingSpinner />}
        {users && !users?.length && <EmptyBox />}
        {!users && !navigatorIsOnline && <NetworkFailed />}
        {userDelete?._id  && (
          <ConfirmationDialog
            title={`Deseja deletar o usuário ${userDelete.name}? `}
            text={'Depois de exclúido a ação não poderá ser desfeita'}
            {...{ handleDeleteConfirmation, handleClose }}
          />
        )}
      </TableContainer>
    );
  }
);

export default UsersTableView;
