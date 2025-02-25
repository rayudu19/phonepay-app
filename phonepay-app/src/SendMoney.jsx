import React, { useState, useContext } from "react";
import { AppContext } from "./Context";
import { useNavigate } from "react-router-dom";

const SendMoney = () => {
  const [amount, setAmount] = useState(0);
  const { sendMoney } = useContext(AppContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMoney(amount);
    navigate("/");
  };

  return (
    <div className="send-container">
      <h2>Send Money</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default SendMoney;
