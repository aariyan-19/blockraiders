import React, { useState, useContext } from "react";
import { BudgetContext } from "../context/BudgetContext";

function ExpenseForm() {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");

  const { addExpense } = useContext(BudgetContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount) return;
    addExpense({
      description,
      amount: parseFloat(amount),
      category,
    });
    setDescription("");
    setAmount("");
  };

  return (
    <div className="card">
      <h2>Add Expense</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="What did you spend on?"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="$ Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>Food</option>
          <option>Transport</option>
          <option>Fun</option>
          <option>Other</option>
        </select>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default ExpenseForm;
