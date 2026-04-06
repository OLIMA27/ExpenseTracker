import React, { useContext } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid
} from "recharts";

import { FaWallet, FaArrowUp, FaArrowDown } from "react-icons/fa";

import Navbar from "./Navbar";
import { dataContext } from "./App";

const COLORS = [
  "#3b82f6",
  "#10b981",
  "#f59e0b",
  "#ef4444",
  "#8b5cf6",
  "#ec4899"
];

function Dashboard() {

  const { transaction } = useContext(dataContext);


  const income = transaction
    .filter(t => t.type === "Income")
    .reduce((acc, t) => acc + Number(t.amount), 0);

  const expenses = transaction.filter(t => t.type === "Expense");

  const totalExpense = expenses.reduce(
    (acc, t) => acc + Number(t.amount),
    0
  );

  const balance = income - totalExpense;


  const categoryData = Object.values(
    expenses.reduce((acc, t) => {

      acc[t.category] = {
        name: t.category,
        value: (acc[t.category]?.value || 0) + Number(t.amount)
      };

      return acc;

    }, {})
  );

  const monthlyData = Object.values(
    expenses.reduce((acc, t) => {

      const month = new Date(t.date).toLocaleString("default", {
        month: "short"
      });

      acc[month] = {
        month,
        amount: (acc[month]?.amount || 0) + Number(t.amount)
      };

      return acc;

    }, {})
  );

  return (

    <div className="bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen">

      <Navbar />

      <div className="ml-64 p-10">

        <h1 className="text-3xl font-bold mb-8">
          Dashboard
        </h1>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

          <BalanceCard
            title="Total Balance"
            amount={balance}
            color="text-blue-600"
            icon={<FaWallet />}
          />

          <BalanceCard
            title="Total Income"
            amount={income}
            color="text-green-600"
            icon={<FaArrowUp />}
          />

          <BalanceCard
            title="Total Expense"
            amount={totalExpense}
            color="text-red-600"
            icon={<FaArrowDown />}
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* PIE CHART */}

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">

            <h3 className="font-bold mb-4 text-lg">
              Expenses by Category
            </h3>

            <div className="h-64">

              {categoryData.length === 0 ? (
                <p className="text-gray-500 text-center">
                  No expense data
                </p>
              ) : (

                <ResponsiveContainer width="100%" height="100%">

                  <PieChart>

                    <Pie
                      data={categoryData}
                      dataKey="value"
                      innerRadius={50}
                      outerRadius={80}
                      paddingAngle={5}
                    >

                      {categoryData.map((entry, index) => (

                        <Cell
                          key={index}
                          fill={COLORS[index % COLORS.length]}
                        />

                      ))}

                    </Pie>

                    <Tooltip />

                  </PieChart>

                </ResponsiveContainer>

              )}

            </div>

          </div>

          {/* LINE CHART */}

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">

            <h3 className="font-bold mb-4 text-lg">
              Monthly Spending
            </h3>

            <div className="h-64">

              <ResponsiveContainer width="100%" height="100%">

                <LineChart data={monthlyData}>

                  <CartesianGrid strokeDasharray="3 3" />

                  <XAxis dataKey="month" />

                  <YAxis />

                  <Tooltip />

                  <Line
                    type="monotone"
                    dataKey="amount"
                    stroke="#3b82f6"
                    strokeWidth={3}
                  />

                </LineChart>

              </ResponsiveContainer>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}

/* ---------- BALANCE CARD COMPONENT ---------- */

function BalanceCard({ title, amount, color, icon }) {

  return (

    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 flex items-center justify-between">

      <div>

        <p className="text-gray-500 text-sm">
          {title}
        </p>

        <h2 className={`text-3xl font-bold ${color}`}>
          ₹{amount}
        </h2>

      </div>

      <div className="text-4xl text-gray-300">
        {icon}
      </div>

    </div>

  );

}

export default Dashboard;