import React from "react";
import { BudgetProvider } from "./context/BudgetContext";
import BudgetOverview from "./components/BudgetOverview";
import ExpenseForm from "./components/ExpenseForm";
import GoalTracker from "./components/GoalTracker";
import Alerts from "./components/Alerts";
import "./styles.css";

function App() {
  return (
    <BudgetProvider>
      <div className="container">
        <h1>PERSONAL FINANCE BUDDY</h1>
        <Alerts />
        <BudgetOverview />
        <ExpenseForm />
        <GoalTracker />
      </div>
    </BudgetProvider>
  );
}

export default App;
