import React, { useContext } from "react";
import { BudgetContext } from "../context/BudgetContext";

function BudgetOverview() {
  const { income, totalSpent } = useContext(BudgetContext);
  const remaining = income - totalSpent;

  return (
    <div className="card">
      <h2>Budget Overview</h2>
      <p><strong>Total Income:</strong> ${income}</p>
      <p><strong>Total Spent:</strong> ${totalSpent}</p>
      <p><strong>Remaining:</strong> ${remaining}</p>
    </div>
  );
}

export default BudgetOverview;
