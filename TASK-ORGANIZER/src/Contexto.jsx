import React, { createContext, useState } from "react";

const contexto = createContext();

function Contexto({ children }) {
  const [addFolder, setAddFolder] = useState({
    nameCategory: "",
    color: "",
  });

  return (
    <contexto.Provider value={{ addFolder, setAddFolder }}>
      {children}
    </contexto.Provider>
  );
}

export { Contexto, contexto };
