import React, { useContext } from "react";
import { BudgetContext } from "../context/BudgetContext";

function Alerts() {
  const { income, totalSpent } = useContext(BudgetContext);
  const spentPercentage = (totalSpent / income) * 100;

  if (spentPercentage > 80) {
    return (
      <div className="alert">
        ⚠️ You’ve spent over 80% of your budget!
      </div>
    );
  }

  return null;
}

export default Alerts;
