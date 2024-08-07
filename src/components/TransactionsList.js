import React, { useState } from 'react';
import Transaction from './Transaction';

function TransactionsList({ transactions, deleteTransaction }) {
  const [sortKey, setSortKey] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');

  const handleSort = (key) => {
    setSortKey(key);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const sortedTransactions = [...transactions].sort((a, b) => {
    if (a[sortKey] < b[sortKey]) {
      return sortOrder === 'asc' ? -1 : 1;
    }
    if (a[sortKey] > b[sortKey]) {
      return sortOrder === 'asc' ? 1 : -1;
    }
    return 0;
  });

  return (
    <table className="ui celled striped padded table">
      <thead>
        <tr>
          <th onClick={() => handleSort('date')}>Date</th>
          <th onClick={() => handleSort('description')}>Description</th>
          <th onClick={() => handleSort('category')}>Category</th>
          <th onClick={() => handleSort('amount')}>Amount</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {sortedTransactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} deleteTransaction={deleteTransaction} />
        ))}
      </tbody>
    </table>
  );
}

export default TransactionsList;
