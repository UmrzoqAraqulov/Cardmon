import React, { useState } from "react";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const Layout = () => {
  const [addDebt, setAddDebt] = useState([]);

  const setLocalStorage = (key, info) => {
    let arr = JSON.parse(localStorage.getItem(key)) || [];
    arr.push({ ...info, id: uuidv4() });
    localStorage.setItem(key, JSON.stringify(arr));
    setAddDebt({arr});
  };

  return (
    <div
      className="container  bg-black p-2 rounded-2xl"
      style={{
        height: "609px",
      }}
    >
      <div
        style={{ background: "#f4f8fb" }}
        className="style relative bg-white w-full h-full rounded-xl pt-5"
      >
        <div
          className=" flex items-center p-1 justify-center camera bg-black absolute top-1 left-1/2 w-4 h-4 -translate-x-1"
          style={{ borderRadius: "50%" }}
        >
          <div className="point w-full h-full rounded-full bg-gray-500"></div>
        </div>
        <main className="w-full">
          <Outlet />
        </main>
        <footer
          style={{ boxShadow: "0px -3px 6px -3px gray" }}
          className="absolute bottom-0 right-0 h-16 w-full bg-white px-5 rounded-t-lg rounded-b-xl"
        >
          <Footer setLocalStorage={setLocalStorage} />
        </footer>
      </div>
    </div>
  );
};

export default Layout;
