

import React, { useContext } from "react";
import Navbar from "./Navbar";
import { dataContext } from "./App";

import { FaTrash, FaArrowUp, FaArrowDown } from "react-icons/fa";

function Transaction() {

  const { transaction, setTransaction } = useContext(dataContext);

  function deleteTransaction(index) {
    const remove = transaction.filter((v, i) => i !== index);
    setTransaction(remove);
  }

  return (

    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">

      <Navbar />

      <div className="ml-64 p-10">

        <h1 className="text-3xl font-bold mb-2">
          Recent Transactions
        </h1>

        <p className="text-gray-500 mb-6">
          Review your spending and income history
        </p>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">

          <table className="w-full text-left">

            {/* TABLE HEADER */}

            <thead className="bg-gray-100 text-gray-600 text-sm">

              <tr>

                <th className="p-4">Date</th>
                <th className="p-4">Type</th>
                <th className="p-4">Category</th>
                <th className="p-4">Description</th>
                <th className="p-4 text-right">Amount</th>
                <th className="p-4 text-center">Action</th>

              </tr>

            </thead>

            <tbody>

              {transaction.length === 0 ? (

                <tr>
                  <td colSpan="6" className="p-6 text-center text-gray-500">
                    No transactions yet
                  </td>
                </tr>

              ) : (

                transaction.map((value, index) => (

                  <tr
                    key={index}
                    className="border-t hover:bg-gray-50 transition"
                  >

                    {/* Date */}

                    <td className="p-4 text-gray-600">
                      {value.date}
                    </td>

                    {/* Type */}

                    <td className="p-4">

                      <span
                        className={
                          value.type === "Income"
                            ? "flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm w-fit"
                            : "flex items-center gap-2 bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm w-fit"
                        }
                      >

                        {value.type === "Income" ? (
                          <FaArrowUp />
                        ) : (
                          <FaArrowDown />
                        )}

                        {value.type}

                      </span>

                    </td>

                    {/* Category */}

                    <td className="p-4 text-gray-700">
                      {value.category}
                    </td>

                    {/* Description */}

                    <td className="p-4 text-gray-700">
                      {value.title}
                    </td>

                    {/* Amount */}

                    <td
                      className={
                        value.type === "Income"
                          ? "p-4 text-right font-semibold text-green-600"
                          : "p-4 text-right font-semibold text-red-600"
                      }
                    >
                      ₹{value.amount}
                    </td>

                    {/* Delete */}

                    <td className="p-4 text-center">

                      <button
                        onClick={() => deleteTransaction(index)}
                        className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition"
                      >
                        <FaTrash />
                      </button>

                    </td>

                  </tr>

                ))

              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>

  );

}

export default Transaction;