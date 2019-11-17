import React from 'react';

import PropTypes from 'prop-types';

import Column from './Column';

import styles from './index.module.css';

const TicTacToe = ({ columns }) => (
  <div className={styles.root}>
    {columns.map((rows, index) => (
      <Column key={index} rows={rows} x={index} />
    ))}
  </div>
);

TicTacToe.propTypes = {
  columns: PropTypes.array.isRequired
};

export default TicTacToe;
