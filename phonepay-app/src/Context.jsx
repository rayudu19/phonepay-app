import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [userBalance, setUserBalance] = useState(1000);  // Starting balance
  const [transactions, setTransactions] = useState([]);

  const sendMoney = (amount) => {
    if (userBalance >= amount) {
      setUserBalance(userBalance - amount);
      setTransactions([
        ...transactions,
        { type: "Sent", amount, date: new Date().toLocaleString() },
      ]);
    } else {
      alert("Insufficient balance");
    }
  };

  const receiveMoney = (amount) => {
    setUserBalance(userBalance + amount);
    setTransactions([
      ...transactions,
      { type: "Received", amount, date: new Date().toLocaleString() },
    ]);
  };

  return (
    <AppContext.Provider value={{ userBalance, sendMoney, receiveMoney, transactions }}>
      {children}
    </AppContext.Provider>
  );
};
