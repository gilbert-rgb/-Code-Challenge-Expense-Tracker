import React from "react";
import Swal from "sweetalert2"; // Import SweetAlert2

function ExpenseItem({ expense, index, deleteExpense }) {
  // Handle delete with confirmation
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    }).then((result) => {
      if (result.isConfirmed) {
        // If the user confirms, delete the expense
        deleteExpense(index);
        Swal.fire("Deleted!", "Your expense has been deleted.", "success");
      } else {
        // If the user cancels, no action
        Swal.fire("Cancelled", "Your expense is safe.", "info");
      }
    });
  };

  return (
    <tr>
      <td>{expense.description}</td>
      <td>${expense.amount}</td>
      <td>{expense.category}</td>
      <td>{expense.date}</td>
      <td>
        <button
          onClick={handleDelete} // Trigger the delete confirmation
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default ExpenseItem;
