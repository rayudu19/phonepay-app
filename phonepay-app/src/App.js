
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./Context";
import Home from "./Home";
import SendMoney from "./SendMoney";
import ReceiveMoney from "./ReceiveMoney";
import Transactions from "./Transactions";
import './App.css';

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/send" element={<SendMoney />} />
          <Route path="/receive" element={<ReceiveMoney />} />
          <Route path="/transactions" element={<Transactions />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
