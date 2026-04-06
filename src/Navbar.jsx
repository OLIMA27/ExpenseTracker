import React from "react";
import { Link } from "react-router-dom";
import { FaChartPie, FaPlusCircle, FaList, FaWallet } from "react-icons/fa";

function Navbar() {
  return (
    <div className="w-64 h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white fixed left-0 top-0 flex flex-col shadow-xl">

      {/* Logo */}
      <div className="p-6 border-b border-gray-700 flex items-center gap-3">
        <FaWallet className="text-3xl text-blue-400" />
        <div>
          <h1 className="text-xl font-bold">FinTrack</h1>
          <p className="text-xs text-gray-400">Track Your Money</p>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex flex-col p-4 gap-2 mt-4">

        <Link
          to="/"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 transition"
        >
          <FaChartPie />
          Dashboard
        </Link>

        <Link
          to="/add"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 transition"
        >
          <FaPlusCircle />
          Add Income / Expense
        </Link>

        <Link
          to="/transaction"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 transition"
        >
          <FaList />
          Transactions
        </Link>

      </div>

      {/* Bottom section */}
      <div className="mt-auto p-4 text-gray-400 text-sm border-t border-gray-700">
        © 2026 FinTrack
      </div>

    </div>
  );
}

export default Navbar;