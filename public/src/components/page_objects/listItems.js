import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Apps, Home } from '@material-ui/icons';
import { Divider, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Link } from 'react-router-dom';

function ListItemLink(props) {
  const { icon, primary, to } = props;

  const CustomLink = React.useMemo(() => {
    return forwardRef((linkProps, ref) => (
      <Link ref={ref} to={to} {...linkProps}/>
    ));
  },
  [ to ],);

  return (
    <li>
      <ListItem button component={CustomLink}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={primary}/>
      </ListItem>
    </li>
  );
}

export const fullListItems = (
  <div>
    <ListItemLink
      to='/home'
      primary='Home'
      icon={<Home color={'secondary'}/>}
    />
    <Divider/>
    <ListItemLink
      to='/applications'
      primary='Registered Applications'
      icon={<Apps color={'secondary'}/>}
    />
  </div>
);

ListItemLink.propTypes = {
  icon: PropTypes.any,
  primary: PropTypes.string,
  to: PropTypes.any
};
