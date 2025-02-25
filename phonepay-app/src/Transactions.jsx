import React, { useContext } from "react";
import { AppContext } from "./Context";

const Transactions = () => {
  const { transactions } = useContext(AppContext);

  return (
    <div className="transactions-container">
      <h2>Transactions</h2>
      {transactions.length > 0 ? (
        <ul>
          {transactions.map((transaction, index) => (
            <li key={index}>
              {transaction.type} ₹{transaction.amount} on {transaction.date}
            </li>
          ))}
        </ul>
      ) : (
        <p>No transactions yet</p>
      )}
    </div>
  );
};

export default Transactions;
