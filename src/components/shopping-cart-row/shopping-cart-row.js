import React from 'react';
import PropTypes from 'prop-types';

import './shopping-cart-row.css';

const ShoppingCartRow = ({ id, title, count, total, idx, onIncrease, onDecrease, onDelete }) => {
  const handleDelete = () => onDelete(id);
  const handleIncrease = () => onIncrease(id);
  const handleDecrease = () => onDecrease(id);
  return (
    <tr>
      <td>{idx + 1}</td>
      <td>{title}</td>
      <td>{count}</td>
      <td>${total}</td>
      <td>
        <button onClick={handleDelete} className="btn btn-outline-danger btn-sm float-right">
          <i className="fa fa-trash-o" />
        </button>
        <button onClick={handleIncrease} className="btn btn-outline-success btn-sm float-right">
          <i className="fa fa-plus-circle" />
        </button>
        <button onClick={handleDecrease} className="btn btn-outline-warning btn-sm float-right">
          <i className="fa fa-minus-circle" />
        </button>
      </td>
    </tr>
  );
};

ShoppingCartRow.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  count: PropTypes.number,
  total: PropTypes.number,
  idx: PropTypes.number,
  onIncrease: PropTypes.func,
  onDecrease: PropTypes.func,
  onDelete: PropTypes.func
};

ShoppingCartRow.defaultProps = {
  id: 0,
  title: '',
  count: 0,
  total: 0,
  idx: 0,
  onIncrease: () => {},
  onDecrease: () => {},
  onDelete: () => {}
};

export default ShoppingCartRow;
