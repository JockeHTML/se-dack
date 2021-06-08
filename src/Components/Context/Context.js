import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  /* save the right text to render when you click show more info button  */

  const [saveText, setSaveText] = useState([]);
  const [sideBar, setSideBar] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const loadingFunction = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
        sideBar,
        setSideBar,
        saveText,
        setSaveText,
        loadingFunction,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
