import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";

function ExpenseTable({ expenses, deleteExpense }) {
  const [sortBy, setSortBy] = useState(null);

  const handleSort = (property) => {
    setSortBy(property);
  };

  const sortedExpenses = [...expenses].sort((a, b) => {
    if (sortBy === "description") {
      return a.description.localeCompare(b.description);
    }
    if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div className="overflow-x-auto mt-10">
      <table className="min-w-full bg-white border border-gray-200 rounded shadow-sm">
        <thead>
          <tr className="bg-gray-100 text-gray-700 text-sm uppercase tracking-wider">
            <th
              onClick={() => handleSort("description")}
              className="py-3 px-4 text-left cursor-pointer hover:text-blue-600"
            >
              Description
            </th>
            <th className="py-3 px-4 text-left">Amount</th>
            <th
              onClick={() => handleSort("category")}
              className="py-3 px-4 text-left cursor-pointer hover:text-blue-600"
            >
              Category
            </th>
            <th className="py-3 px-4 text-left">Date</th>
            <th className="py-3 px-4 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {sortedExpenses.map((expense, index) => (
            <ExpenseItem
              key={index}
              index={index}
              expense={expense}
              deleteExpense={deleteExpense}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExpenseTable;
