import React, { useState } from "react";
import Swal from "sweetalert2"; // Import SweetAlert2

function ExpenseForm({ addExpense }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent form submission

    // Debugging: Log the current input values
    console.log('Description:', description);
    console.log('Amount:', amount);
    console.log('IsNaN Check:', isNaN(amount));
    console.log('Amount is number:', Number(amount));

    // Validate form fields
    if (!description || !amount || isNaN(amount) || Number(amount) <= 0) {
      Swal.fire({
        title: "Error!",
        text: "Please enter a valid description and a positive amount.",
        icon: "error",
        confirmButtonText: "OK",
      });
      return; // Stop the form submission if validation fails
    }

    // Create new expense object
    const newExpense = {
      description,
      amount,
      category: category || "Uncategorized",
      date: date || new Date().toISOString().split("T")[0],
    };

    // Add expense to the list
    addExpense(newExpense);

    // Reset form fields
    setDescription("");
    setAmount("");
    setCategory("");
    setDate("");

    // Show success notification
    Swal.fire({
      title: "Success!",
      text: "Expense added successfully!",
      icon: "success",
      confirmButtonText: "Great!",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md mx-auto text-left"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">Add Expense</h2>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Description
        </label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Amount
        </label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          min="0.01"
          step="0.01"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Category (optional)
        </label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Date (optional)
        </label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-black-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ExpenseForm;
