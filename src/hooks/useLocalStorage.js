import React from "react";
import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [data, setData] = useState(() => {
    try {
      const data = JSON.parse(localStorage.getItem(key));
      return data;
    } catch (error) {
      return initialValue
    }
  });
  const setNewData = (value) => {
    localStorage.setItem(key, JSON.stringify(value));
    setData(value);
  };
  return [data, setNewData];
};

export default useLocalStorage;

