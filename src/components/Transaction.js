import React from 'react';

function Transaction({ transaction, deleteTransaction }) {
  const handleDelete = () => {
    fetch(`https://json-server-sqmy.onrender.com/transactions/`, {
      method: 'DELETE'
    }).then(() => deleteTransaction(transaction.id));
  };

  return (
    <tr>
      <td>{transaction.date}</td>
      <td>{transaction.description}</td>
      <td>{transaction.category}</td>
      <td>{transaction.amount}</td>
      <td>
        <button className="ui button" onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
}

export default Transaction;
