import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  /* save the right text to render when you click show more info button  */

  const [saveText, setSaveText] = useState([]);
  const [sideBar, setSideBar] = useState(false);
  return (
    <AppContext.Provider value={{ sideBar, setSideBar, saveText, setSaveText }}>
      {children}
    </AppContext.Provider>
  );
};
