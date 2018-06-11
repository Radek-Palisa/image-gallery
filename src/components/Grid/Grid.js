import React from 'react';
import PropTypes from 'prop-types';
import './Grid.css';

const Grid = ({ children }) => (
  <div className="grid">
    {children.map(child => (
      <div key={child.key} className="grid-element">
        {child}
      </div>
    ))}
  </div>
);

Grid.defaultProps = {
  children: [],
};

Grid.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object),
};

export default Grid;
