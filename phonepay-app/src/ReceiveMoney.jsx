import React, { useState, useContext } from "react";
import { AppContext } from "./Context";
import { useNavigate } from "react-router-dom";

const ReceiveMoney = () => {
  const [amount, setAmount] = useState(0);
  const { receiveMoney } = useContext(AppContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    receiveMoney(amount);
    navigate("/");
  };

  return (
    <div className="receive-container">
      <h2>Receive Money</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <button type="submit">Receive</button>
      </form>
    </div>
  );
};

export default ReceiveMoney;
