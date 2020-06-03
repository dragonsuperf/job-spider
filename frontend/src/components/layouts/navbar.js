import React from "react";

import PropTypes from 'prop-types';
import clsx from 'clsx';

import AppBar from "@material-ui/core/AppBar";
import PersonPin from "@material-ui/icons/PersonPin";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { useTheme, makeStyles, withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
};

function CustomButton(props) {
  const { classes, children, className, ...other } = props;

  return (
    <Button className={clsx(classes.root, className)} {...other}>
      {children || 'class names'}
    </Button>
  );
}

CustomButton.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
};

const NavButton = withStyles(styles)(CustomButton);

const useStyles = makeStyles({
  root: ({primary}) => ({
    backgroundColor: primary.light,
  })
})

const Navbar = (props) => {
  
  const { palette } = useTheme()
  const classes = useStyles({
    primary: palette.primary
  })

  return (
    <div>
      <React.Fragment>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <div>
              <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                <Button className={classes.root}>채용공고</Button>
                <Button className={classes.root}>기업목록</Button>
                <Button className={classes.root}>셀프구직</Button>
                <NavButton>받은제안</NavButton>
              </ButtonGroup>
            </div>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    </div>
  );
};

export default Navbar;
