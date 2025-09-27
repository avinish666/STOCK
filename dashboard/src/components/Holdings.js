import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/allHoldings")
      .then((res) => {
        setAllHoldings(res.data);
      })
      .catch((err) => {
        console.error("Axios Error:", err.message);
      });
  }, []);

  // Graph labels
  const labels = allHoldings.map((stock) => stock.name);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => Number(stock.price) || 0),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  // --- 📊 Summary Calculations ---
  const totalInvestment = allHoldings.reduce(
    (sum, stock) => sum + (Number(stock.avg) || 0) * (Number(stock.qty) || 0),
    0
  );
  const currentValue = allHoldings.reduce(
    (sum, stock) => sum + (Number(stock.price) || 0) * (Number(stock.qty) || 0),
    0
  );
  const pnl = currentValue - totalInvestment;
  const pnlPercent =
    totalInvestment > 0 ? ((pnl / totalInvestment) * 100).toFixed(2) : 0;

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&amp;L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {allHoldings.length > 0 ? (
              allHoldings.map((stock) => {
                const qty = Number(stock.qty) || 0;
                const avg = Number(stock.avg) || 0;
                const price = Number(stock.price) || 0;

                const curValue = price * qty;
                const investment = avg * qty;
                const pnl = curValue - investment;

                const isProfit = pnl >= 0;
                const profClass = isProfit ? "profit" : "loss";

                // ✅ Decide profit/loss class from stock.day value
                const dayClass =
                  typeof stock.day === "string" && stock.day.startsWith("-")
                    ? "loss"
                    : "profit";

                return (
                  <tr key={stock._id}>
                    <td>{stock.name || "-"}</td>
                    <td>{qty}</td>
                    <td>{avg ? avg.toFixed(2) : "-"}</td>
                    <td>{price ? price.toFixed(2) : "-"}</td>
                    <td>{curValue.toFixed(2)}</td>
                    <td className={profClass}>{pnl.toFixed(2)}</td>
                    <td className={profClass}>{stock.net || "-"}</td>
                    <td className={dayClass}>{stock.day || "-"}</td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="8" style={{ textAlign: "center" }}>
                  No holdings available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* --- 📊 Dynamic Summary --- */}
      <div className="row">
        <div className="col">
          <h5>
            {totalInvestment.toFixed(2)}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            {currentValue.toFixed(2)}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5 className={pnl >= 0 ? "profit" : "loss"}>
            {pnl.toFixed(2)} ({pnlPercent}%)
          </h5>
          <p>P&amp;L</p>
        </div>
      </div>

      <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;
