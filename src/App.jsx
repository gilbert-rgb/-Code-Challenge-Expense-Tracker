import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import SearchBar from "./components/SearchBar";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const addExpense = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };

  const deleteExpense = (index) => {
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(updatedExpenses);
  };

  const filterExpenses = () => {
    return expenses.filter(
      (expense) =>
        expense.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        expense.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <div className="min-h-screen bg-blue-500 text-black px-8 py-8">
      
      <div className="w-full max-w-2xl text-left">
        <h1 className="text-5xl font-bold mb-6">Expense Tracker</h1>

        <div className="bg-blue bg-opacity-20 p-6 rounded-lg shadow-lg space-y-6 backdrop-blur-md">
          <SearchBar setSearchTerm={setSearchTerm} />
          <ExpenseForm addExpense={addExpense} />
          <ExpenseTable expenses={filterExpenses()} deleteExpense={deleteExpense} />
        </div>
      </div>
    </div>
  );
}

export default App;
