import React, { useState, useEffect } from "react";
import "./index.css";

const TelegramLink = "https://t.me/Elonprivatechat008";

const investmentPlans = [
  { name: "Basic", range: "$100 - $400" },
  { name: "Silver", range: "$500 - $900" },
  { name: "Gold", range: "$1,000 - $4,000" },
  { name: "Premium", range: "$5,000 - $20,000" }
];

export default function TeslaApp() {
  const [coinPrice, setCoinPrice] = useState("Loading...");

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/simple/price?ids=tesla-token&vs_currencies=usd")
      .then(res => res.json())
      .then(data => {
        setCoinPrice(data["tesla-token"]?.usd ? `$${data["tesla-token"].usd}` : "Unavailable");
      }).catch(() => setCoinPrice("$2,057"));
  }, []);

  return (
    <div className="app">
      <h1>🚀 Welcome to TeslaUniqueFinance.co</h1>
      <p className="coin-price">Tesla Coin Price: <strong>{coinPrice}</strong></p>

      <div className="tabs">
        <a href={TelegramLink} className="tab deposit" target="_blank" rel="noreferrer">💰 Deposit</a>
        <button className="tab withdraw">🔓 Withdraw</button> className="tab FAQ" className="tab register" 
      </div>

      <p className="notice">Note: You must deposit at least $500 before you can withdraw.</p>

      <h2>📊 Investment Plans</h2>
      <div className="plans">
        {investmentPlans.map(plan => (
          <div key={plan.name} className="plan-card">
            <h3>{plan.name} Plan</h3>
            <p>{plan.range}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
