import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { useNavigate } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';

import { MyContext } from 'core/context/myContext';
import * as classes from './app.layout.styles';

export const AppLayout: React.FunctionComponent = (props) => {
  const { children } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const { page, setPage } = React.useContext(MyContext);
  const navigate = useNavigate();

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSelection = (event) => {
    setAnchorEl(null);
    switch (event.currentTarget.innerText) {
      case 'Home':
        navigate('/characters');
        break;
      case 'Character':
        navigate('/characterList');
        break;
      case 'Location':
        navigate('/locations');
        break;
      case 'Episodes':
        navigate('/episodes');
        break;
    }
  };

  const handleChange = (event, value: number) => {
    setPage(value);
  };

  return (
    <>
      <AppBar position="static">
        <div className={classes.viewButton}>
          <Button
            aria-controls="fade-menu"
            aria-haspopup="true"
            onClick={handleOpenMenu}
          >
            view
          </Button>
          <Menu
            id="fade-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleSelection}
            TransitionComponent={Fade}
          >
            <MenuItem onClick={handleSelection}>Home</MenuItem>
            <MenuItem onClick={handleSelection}>List Characters</MenuItem>
            <MenuItem onClick={handleSelection}>Location</MenuItem>
            <MenuItem onClick={handleSelection}>Episodes</MenuItem>
          </Menu>
        </div>
      </AppBar>
      <div className={classes.page}>
        <Typography>Page: {page}</Typography>
        <Pagination count={42} page={page} onChange={handleChange} />
      </div>
      <main className={classes.content}>{children}</main>
    </>
  );
};
