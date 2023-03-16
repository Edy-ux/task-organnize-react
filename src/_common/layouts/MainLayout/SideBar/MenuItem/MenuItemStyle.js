import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(0),
  
  },
  linkStyle: {
    textDecoration: "none",
    color: 'inherit',
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
  }

}));

export default useStyles;
