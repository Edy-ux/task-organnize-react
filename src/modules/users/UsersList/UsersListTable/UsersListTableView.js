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
import useStyles from './UsersListTableStyle';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

//Components
import NetworkFailed from '_common/lotties/NetworkFailed';
import { Grid } from '@material-ui/core';
import { formatDateCreatedAt, formatDateUpdate } from '_common/utils/formaDate';

const UsersListTableView = ({ users, navigatorIsOnline, onSelectUserId = f => f}) => {
  
  const classes = useStyles();

  const handleOnSelectUserId = (id) => () => onSelectUserId?.(id)
  console.log("render");
  
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
              <TableRow key={_id} hover onClick={handleOnSelectUserId(_id)}>
                <TableCell component="th" scope="row">
                  {name}
                </TableCell>
                <TableCell>{email}</TableCell>
                <TableCell>{formatDateCreatedAt(creation)}</TableCell>

                <TableCell align="center">
                  <Grid>
                    <EditIcon cursor="pointer" />
                    <DeleteIcon cursor="pointer" />
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
    </TableContainer>
  );
};

export default UsersListTableView;
