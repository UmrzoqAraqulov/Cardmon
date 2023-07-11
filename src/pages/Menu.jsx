import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <h2 className="font-bold text-xl px-4">Menu</h2>
      <ul className="flex flex-col mt-2 mx-4 px-5 py-2 bg-white rounded-lg">
        <li>
          <Link to="/menu" className="py-1 flex gap-2">
            <i className="fa-solid fa-credit-card text-xl text-blue-800 pt-2"></i>
            <div className=" border-b-2 py-1">
              <p className="font-bold text-lg ">My cards</p>
              <p className="text-base">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. A,
                maiores.
              </p>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/menu" className="py-2 flex gap-2 ">
            <i className="fa-solid fa-right-left rotate-90 text-xl -translate-x-8 -translate-y-5 text-green-700"></i>
            <div className=" border-b-2 py-1">
              <p className="font-bold text-lg">Exchange rates</p>
              <p className="text-base">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. A,
                maiores.
              </p>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/menu" className="py-2 flex gap-2 ">
            <i className="fa-regular fa-credit-card text-xl text-blue-800 pt-3"></i>
            <div className=" border-b-2 py-1">
              <p className="font-bold text-lg">Membership cards</p>
              <p className="text-base">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. A,
                maiores.
              </p>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/menu" className="py-2 flex gap-2 ">
            <i class="fa-solid fa-lock text-xl text-yellow-600 pt-2"></i>
            <div className=" border-b-2 py-1">
              <p className="font-bold text-lg">Security</p>
              <p className="text-base">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. A,
                maiores.
              </p>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
