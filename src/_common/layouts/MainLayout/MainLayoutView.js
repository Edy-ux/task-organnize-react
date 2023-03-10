import { makeStyles } from '@material-ui/core';
import { useMain } from './context/useMain';
import Header from './Header';
import SideBar from './SideBar';

const useStyles = makeStyles((theme) => ({
  main: {
    padding: theme.spacing(3, 3),
    marginTop: theme.spacing(8),
    marginLeft: theme.spacing(8),
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(8),
      marginLeft: ({ sidebarIsOpen }) => theme.spacing(sidebarIsOpen ? 30 : 8)
    },
    transition: theme.transitions.create('margin-left', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  }
}));

const RootLayout = ({ children }) => {
  const { sidebarIsOpen } = useMain();

  const classes = useStyles({ sidebarIsOpen });

  return (
    <>
      <Header />
      <SideBar />
      <main className={classes.main}>{children}</main>
    </>
  );
};

export default RootLayout;
