import  { useState } from 'react';
import { v4 as uuidv4 } from "uuid";

const useCRUD = () => {
  const [addDebt, setAddDebt] = useState([]);
  const [editDebt, setEditDebd] = useState({});

  const setLocalStorage = (info, key) => {
    let arr = JSON.parse(localStorage.getItem(key)) || [];
    arr.push({ ...info, id: uuidv4() });
    localStorage.setItem(key, JSON.stringify(arr));
    setAddDebt({ arr });
  };

  const editDateDebts = (id) => {
    setEditDebd(addDebt.find((el) => (el.id = id)));
    // openModalDebts();
  };

  return { setLocalStorage, editDebt, editDateDebts };
};

export default useCRUD