import React, { useState, useEffect } from "react";
import api from "../services/apiConfig";

const Calculator = () => {
  const [request, setRequest] = useState({
    operand1: 0,
    operand2: 0,
    operation: "",
  });
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e) {
    setError("");
    setResult(null);
    setRequest({ ...request, [e.name]: e.value });
  }

  const calculate = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    api
      .post("/calculator/", request)
      .then((res) => {
        console.log("RESPONSE", res.data);
        setResult((prev) => res.data);
        setIsLoading(false);
      })
      .catch((e) => {
        setError("Invalid operation");
        setIsLoading(false);
      });
  };
  return (
    <React.Fragment>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md pt-7">
              <form
                className="bg-white rounded px-12 pt-6 pb-8 mb-4 border-2 border-zinc-700"
                onSubmit={calculate}
              >
                <div className="text-xl mt-1 mb-5 font-bold text-center text-[#23af3f]">
                  Manzi's Calculator
                </div>
                <div className="mb-4">
                  <label className="text-gray-600 block" htmlFor="meterNumber">
                    First Operand
                  </label>
                  <input
                    value={request.operand1}
                    onChange={(e) => handleChange(e.target)}
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="operand1"
                    type="number"
                    pattern="[0-9]*"
                    required
                    autoFocus
                    placeholder="First operand"
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-normal mb-2"
                    htmlFor="amount"
                  >
                    Second Operand
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Second operand"
                    name="operand2"
                    type="number"
                    pattern="[0-9]*"
                    required
                    onChange={(e) => handleChange(e.target)}
                    value={request.operand2}
                  />
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter operation"
                    name="operation"
                    type="text"
                    required
                    onChange={(e) => handleChange(e.target)}
                    value={request.operation}
                  />
                  {error.length > 0 && <p className="text-red-500">{error}</p>}
                  {result !== null && (
                    <p>
                      The answer is{" "}
                      <span className="text-success">{result}</span>
                    </p>
                  )}
                </div>

                <button
                  className="btn-color focus:outline-none w-10/12 text-white p-3 px-5 rounded-3xl mt-2"
                  type="submit"
                >
                  {isLoading ? "Loading..." : "Calculate"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Calculator;
