import React from 'react'
import { NavLink } from 'react-router-dom';
import image from "../assets/image/expenses.jpg";
import { Diagramma } from "../components/Diagramma";

const HomePage = () => {
  let arr = JSON.parse(localStorage.getItem("expenses")) || [];
  
  let total = 0;

  const totalResult = () => {
    let transactionsIncome = JSON.parse(
      localStorage.getItem("incomeTotal")
    );
    arr.map((el) => (total += +el.cost));
    console.log(total,transactionsIncome);
    localStorage.setItem("expensesTotal",JSON.stringify(total));
    total=transactionsIncome-total;
  };

  const data = [
    {
      id: "Award",
      value: arr.reduce((ac, el) => {
        if (el.category === "Award") {
          ac += +el.cost;
        }
        return ac;
      }, 0),
      color: "hsl(165, 70%, 50%)",
    },
    {
      id: "Pension",
      value: arr.reduce((ac, el) => {
        if (el.category === "Pension") {
          ac += +el.cost;
        }
        return ac;
      }, 0),
      color: "hsl(84, 70%, 50%)",
    },
    {
      id: "Salary",
      value: arr.reduce((ac, el) => {
        if (el.category === "Salary") {
          ac += +el.cost;
        }
        return ac;
      }, 0),
      color: "hsl(270, 70%, 50%)",
    },
    {
      id: "Scholarsh",
      value: arr.reduce((ac, el) => {
        if (el.category === "Scholarsh") {
          ac += +el.cost;
        }
        return ac;
      }, 0),
      color: "hsl(202, 70%, 50%)",
    },
    {
      id: "Other",
      value: arr.reduce((ac, el) => {
        if (el.category === "Other") {
          ac += +el.cost;
        }
        return ac;
      }, 0),
      color: "hsl(316, 70%, 50%)",
    },
  ];

  return (
    <div className="transactions">
      <nav className="flex justify-between items-center px-3">
        <h3 className="font-medium text-xl">Overview</h3>
        <div className="flex items-center gap-3 text-xl text-blue-700">
          <div className="card">
            <i className="fa-solid fa-credit-card cursor-pointer"></i>
          </div>
          <div className="calendar">
            <i className="fa-solid fa-calendar-days cursor-pointer"></i>
          </div>
        </div>
      </nav>

      <div className="flex rounded-full w-4/5 mx-auto  bg-gray-300 p-1.5 mt-2 justify-between gap-1">
        <div className="expenses w-1/2 bg-white py-2 px-4 rounded-full">
          <NavLink to="/" className="active flex items-center justify-around ">
            <i className="fa-solid fa-arrow-up px-2 py-1.5 bg-gray-500 rounded-full text-white"></i>
            <p>EXPENSES</p>
          </NavLink>
        </div>
        <div className="income w-1/2 bg-white py-2 px-4 rounded-full">
          <NavLink to="/income" className=" flex items-center  justify-around">
            <i className="fa-solid fa-arrow-down px-2 py-1.5 bg-gray-500 rounded-full text-white"></i>
            <p>INCOME</p>
          </NavLink>
        </div>
      </div>
      {totalResult()}

      <div className='flex bg-blue-600 w-44 mx-auto mt-1 py-1 justify-center rounded-b-xl rounded-t-md gap-2 text-white font-medium'>
        <i class="fa-solid fa-dollar-sign border-2 border-white py-0.5 px-1.5 rounded-full"></i>
        <p>BALANCE: {total}</p>
      </div>

      <div className="h-96">
        {arr.length === 0 ? (
          <div className="flex pt-6 items-center text-center text-gray-600 flex-col">
            <img className="w-48" src={image} alt="" />
            <p>No Any data for the selected period</p>
          </div>
        ) : (
          <Diagramma data={data} />
        )}
      </div>
    </div>
  );
}

export default HomePage