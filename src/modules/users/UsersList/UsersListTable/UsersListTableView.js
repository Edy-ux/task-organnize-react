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

const UsersListTableView = ({ users }) => {
  const classes = useStyles();
  return (
    <TableContainer component={Paper} className={classes.root}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>Email</TableCell>
            <TableCell width={200} align="center">
              Ações
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody className={classes.tbody}>
          {users &&
            users.map((user) => (
              <TableRow key={user.id} hover>
                <TableCell component="th" scope="row">
                  {user.name}
                </TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell align="center">edit</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      {!users && <LoadingSpinner />}
      {(users && !users.length && <EmptyBox />)}
    </TableContainer>
  );
};

export default UsersListTableView;
