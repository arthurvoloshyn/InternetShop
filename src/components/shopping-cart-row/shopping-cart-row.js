import React from 'react';

import './shopping-cart-row.css';

const ShoppingCartRow = ({ item: { id, title, count, total }, idx, onIncrease, onDecrease, onDelete }) => (
  <tr>
    <td>{idx + 1}</td>
    <td>{title}</td>
    <td>{count}</td>
    <td>${total}</td>
    <td>
      <button
        onClick={() => onDelete(id)}
        className="btn btn-outline-danger btn-sm float-right">
        <i className="fa fa-trash-o" />
      </button>
      <button
        onClick={() => onIncrease(id)}
        className="btn btn-outline-success btn-sm float-right">
        <i className="fa fa-plus-circle" />
      </button>
      <button
        onClick={() => onDecrease(id)}
        className="btn btn-outline-warning btn-sm float-right">
        <i className="fa fa-minus-circle" />
      </button>
    </td>
  </tr>
);

export default ShoppingCartRow;
