import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import EmptyBox from '_common/lotties/EmptyBox';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Grid } from '@material-ui/core';
import FormatDate from '_common/utils/formatDate';
import ConfirmationDialog from '_common/components/ConfirmationDialog';
import useStyles from './TasksTableStyle';
import { memo } from 'react';

const override = {
  display: 'block',
  margin: '4rem auto'
};

const TasksTableView = memo(
  ({
    error,
    loading,
    searchTermTask,
    handleCloseConfirmation,
    tasks,
    handleSelectTaskDelete = (f) => f,
    handleEdit,
    confirmationDialogIsOpen,
    taskDialogState,
    handleDeleteConfirmation
  }) => {
    const classes = useStyles();

    return (
      <TableContainer component={Paper} className={classes.root}>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Situação</TableCell>
              <TableCell>Descrição</TableCell>
              <TableCell>Responsável</TableCell>
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
              tasks?.map((task) => {
                const { status, creation, _id, description, responsible } = task;
                return (
                  <TableRow key={_id} hover>
                    <TableCell component="th" scope="row">
                      {status}
                    </TableCell>
                    <TableCell>{description}</TableCell>
                    <TableCell>{responsible.name}</TableCell>
                    <TableCell>{FormatDate.formatDateCreatedAt(creation)}</TableCell>
                    <TableCell align="center">
                      <Grid>
                        <EditIcon cursor="pointer" onClick={() => handleEdit(task)} />
                        <DeleteIcon cursor="pointer" onClick={handleSelectTaskDelete(task)} />
                      </Grid>
                    </TableCell>
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>

        {tasks && !tasks.length && searchTermTask && <EmptyBox />}
        {confirmationDialogIsOpen && (
          <ConfirmationDialog
            title={`Deseja deletar o usuário ${taskDialogState.name}? `}
            text={'Depois de exclúido a ação não poderá ser desfeita'}
            {...{ handleDeleteConfirmation, handleCloseConfirmation }}
          />
        )}
      </TableContainer>
    );
  }
);

export default TasksTableView;
