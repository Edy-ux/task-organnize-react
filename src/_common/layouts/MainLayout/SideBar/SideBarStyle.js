import { makeStyles } from '@material-ui/core/styles';
const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
  drawer: {
    flexShrink: 0,
    whiteSpace: 'nowrap',
    marginTop: theme.spacing(8),
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(8)
    },  
    background: `${theme.palette.mode === "dark" ? theme.palette.secondary.main : "rgba(18, 18, 18, 0)" }`

  },
  drawerOpen: {  
    width: drawerWidth,
    zIndex: 1,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: 'hidden',
    width: theme.spacing(8),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(8)
    }
  }
}));

export default useStyles;
