import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

function Background(props) {
  const { children } = props;
  return (<div className="background">{ children }</div>);
}

Background.propTypes = {
  children: PropTypes.element.isRequired,
};
export default Background;
