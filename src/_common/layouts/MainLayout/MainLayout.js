import { makeStyles } from '@material-ui/core';
import Header from './Header';

const useStyles = makeStyles((theme) => ({
  main: {
    padding: theme.spacing(3, 3),
    marginTop: theme.spacing(8),
    marginLeft: theme.spacing(8),
    
  }
}));

const MainLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <main className={classes.main}>{children}</main>
    </>
  )
};

export default MainLayout;
