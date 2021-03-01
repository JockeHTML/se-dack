import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  /* save the right text to render when you click show more info button  */

  const [saveText, setSaveText] = useState([]);

  return (
    <AppContext.Provider value={{ saveText, setSaveText }}>
      {children}
    </AppContext.Provider>
  );
};
