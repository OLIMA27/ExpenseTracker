
import React, { useState, useContext } from "react";
import Navbar from "./Navbar";
import { dataContext } from "./App";

import { FaMoneyBillWave, FaTag, FaCalendarAlt } from "react-icons/fa";
import { MdTitle } from "react-icons/md";

function Add() {

  const { transaction, setTransaction } = useContext(dataContext);

  const incomeCategories = ["Salary", "Investment", "Business", "Freelance", "Gift"];
  const expenseCategories = ["Food", "Transport", "Shopping", "Bills", "Entertainment", "Health"];

  const [form, setForm] = useState({
    title: "",
    amount: "",
    type: "",
    category: "",
    date: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;

    if (name === "type") {
      setForm({ ...form, type: value, category: "" });
    } else {
      setForm({ ...form, [name]: value });
    }
  }
  const categories = form.type === "Income" ? incomeCategories : expenseCategories;
  function submit(e) {
    e.preventDefault();

    if (!form.title.trim()) {
      alert("Title is required");
      return;
    }

    if (!form.amount || Number(form.amount) <= 0) {
      alert("Enter valid amount");
      return;
    }

    if (!form.type) {
      alert("Select transaction type");
      return;
    }

    if (!form.category) {
      alert("Select category");
      return;
    }

    if (!form.date) {
      alert("Select date");
      return;
    }

    setTransaction([...transaction, form]);
    alert("Transaction Added");

    setForm({
      title: "",
      amount: "",
      type: "",
      category: "",
      date: ""
    });
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      <Navbar />
      <div className="ml-64 flex justify-center items-center pt-16">
        <form
          onSubmit={submit}
          className="bg-white p-10 rounded-2xl shadow-2xl w-[450px] space-y-6">

          <h2 className="text-3xl font-bold text-center text-gray-800">
            Add Transaction</h2>

          <p className="text-center text-gray-500 text-sm">
            Track your income and expenses</p>
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Description </label>

            <div className="flex items-center border rounded-lg px-3">
              <MdTitle className="text-gray-400" />
              <input type="text" name="title" value={form.title} placeholder="Lunch at cafe"
                onChange={handleChange}
                className="w-full px-3 py-2 outline-none" />
            </div>
          </div>

          <div>

            <label className="block font-medium text-gray-700 mb-1">Amount</label>
            <div className="flex items-center border rounded-lg px-3">
              <FaMoneyBillWave className="text-gray-400" />
              <input type="number" name="amount" value={form.amount} placeholder="Enter amount" onChange={handleChange}
                className="w-full px-3 py-2 outline-none" /></div>
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1"> Type</label>

            <select name="type" value={form.type} onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none" >

              <option value="">Select Type</option>
              <option value="Income">Income</option>
              <option value="Expense">Expense</option>
            </select>
          </div>
          <div>

            <label className="block font-medium text-gray-700 mb-1"> Category </label>

            <div className="flex items-center border rounded-lg px-3">

              <FaTag className="text-gray-400" />
              <select name="category" value={form.category} onChange={handleChange} disabled={!form.type}
                className="w-full px-3 py-2 outline-none bg-transparent">

                <option value="">Select Category</option>

                {categories.map((cat, index) => (
                  <option key={index} value={cat}>{cat}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>

            <label className="block font-medium text-gray-700 mb-1"> Date</label>
            <div className="flex items-center border rounded-lg px-3">
              <FaCalendarAlt className="text-gray-400" />
              <input type="date" name="date" value={form.date} onChange={handleChange} className="w-full px-3 py-2 outline-none" />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transition">
            Add Transaction
          </button>
        </form>
      </div>
    </div>
  );
}
export default Add;