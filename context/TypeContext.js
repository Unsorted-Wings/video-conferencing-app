// context/TypeContext.js
"use client";
import { createContext, useState, useContext } from "react";

const TypeContext = createContext();

export const useType = () => useContext(TypeContext);

export const TypeProvider = ({ children }) => {
  const [type, setType] = useState("");

  return (
    <TypeContext.Provider value={{ type, setType }}>
      {children}
    </TypeContext.Provider>
  );
};
