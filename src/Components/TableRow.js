import React from 'react';

const TableRow = ({ data }) => {
  const { name, id, image, symbol, current_price, total_volume } = data;

  return (
    <tr>
     <td>
        <img src={image} alt={name} id='imgSym'/>
      </td>
       <td>{name}</td>
      <td>{symbol}</td>
      <td>{id}</td>
      <td>${current_price}</td>
      <td>${total_volume}</td>
    </tr>
  );
};

export default TableRow;
