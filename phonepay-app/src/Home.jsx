import React, { useContext } from "react";
import { AppContext } from "./Context";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { userBalance } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>PhonePay</h1>
      <div className="balance">
        <p>Current Balance: ₹{userBalance}</p>
      </div>
      <div className="buttons">
        <button onClick={() => navigate("/send")}>Send Money</button>
        <button onClick={() => navigate("/receive")}>Receive Money</button>
        <button onClick={() => navigate("/transactions")}>Transactions</button>
      </div>
    </div>
  );
};

export default Home;
