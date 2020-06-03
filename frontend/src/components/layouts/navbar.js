import React from "react";
// import clsx from 'clsx';

import AppBar from "@material-ui/core/AppBar";
import PersonPin from "@material-ui/icons/PersonPin";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import LightBlue from '@material-ui/core/color/LightBlue'

// const styles = {
//     root: {
//       background: LightBlue[600],
//       borderRadius: 3,
//       border: 0,
//       color: 'white',
//       padding: '0 10px',
//       boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//     },
//   };

// const ModifiedNavbarButton = (props) => {
//     const {classes, children, className, ...other} = props

//     return (
//         <Button className={clsx(classes.root, className)} {...others}>
//             { children || 'class names' }
//         </Button>
//     )
// }

// ModifiedNavbarButton.propTypes = {
//     children: PropTypes.node,
//     classes: PropTypes.object.isRequired,
//     className: PropTypes.string,
//   };

// const NavButton = withStyles(styles)(ModifiedNavbarButton)

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  grid: {
    text_align: "center",
  },
  button: {
    width: "100%",
    padding: "0px, 10px, 0px, 10px",
  },
}));



const Navbar = (props) => {
  const classes = useStyles();

  return (
    <div>
      <React.Fragment>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <PersonPin className={classes.icon} />
            <Grid item xs={3} className={classes.grid}>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
              >
                채용공고
              </Button>
            </Grid>
            <Grid item xs={3} className={classes.grid}>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
              >
                기업목록
              </Button>
            </Grid>
            <Grid item xs={3} className={classes.grid}>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
              >
                받은제안
              </Button>
            </Grid>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    </div>
  );
};

export default Navbar;
