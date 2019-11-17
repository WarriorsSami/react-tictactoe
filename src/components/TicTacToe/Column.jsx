import React from 'react';

import PropTypes from 'prop-types';

import Space from './Space';

import styles from './Column.module.css';

const Column = ({ rows, x }) => (
  <div className={styles.root}>
    {rows.map((value, y) => (
      <Space key={`${x}_${y}`} value={value} x={x} y={y} />
    ))}
  </div>
);

Column.propTypes = {
  rows: PropTypes.array.isRequired,
  x: PropTypes.number.isRequired
};

export default Column;
