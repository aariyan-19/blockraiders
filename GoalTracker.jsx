import React, { useContext } from "react";
import { BudgetContext } from "../context/BudgetContext";

function GoalTracker() {
  const { goal } = useContext(BudgetContext);
  const progress = (goal.saved / goal.target) * 100;

  return (
    <div className="card">
      <h2>Goal: {goal.name}</h2>
      <p>Saved: ${goal.saved} / ${goal.target}</p>
      <progress value={progress} max="100"></progress>
    </div>
  );
}

export default GoalTracker;
