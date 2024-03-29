import { makeStyles } from '@material-ui/core';
import { memo } from 'react';
import Snackbar from '_common/components/Snackbar';
import { useMainContext } from './context/useMainContext';
import Header from './Header';
import SideBar from './SideBar';

const useStyles = makeStyles((theme) => ({
  main: {
    padding: theme.spacing(3, 3),
    marginTop: theme.spacing(6),
    minHeight: theme.spacing(100),
    color: theme.palette.mode === 'light' ? '#3b4045' : '#FFF',
    [theme.breakpoints.down('sm')]: {
      zIndex: 0,
      marginTop: theme.spacing(8),
      marginLeft: ({ sidebarIsOpen }) => theme.spacing(sidebarIsOpen ? 30 : 8)
    },
    [theme.breakpoints.up('sm')]: {
      zIndex: 0,
      marginTop: theme.spacing(8),
      marginLeft: ({ sidebarIsOpen }) => theme.spacing(sidebarIsOpen ? 30 : 8)
    },
    transition: theme.transitions.create('margin-left', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),

    background: `${theme.palette.mode === 'dark' ? theme.palette.secondary.main : 'rgba(18, 18, 18, 0)'}`
  }
}));

const RootLayoutMainView = memo(({ children }) => {
  const { sidebarIsOpen } = useMainContext();

  const classes = useStyles({ sidebarIsOpen });
  return (
    <>
      <Header />
      <SideBar />
      <main className={classes.main}>{children}</main>
      <Snackbar />
    </>
  );
});

export default RootLayoutMainView;
