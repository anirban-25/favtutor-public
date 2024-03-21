"use client";
import {createContext,useState, useContext} from "react"

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [showContent, setShowContent] = useState(false);
  const [content, setContent] = useState("");
  const [tryItYourself, setTryItYourself] = useState("#write your code here");
  const [debug, setDebug] = useState(false)
  const toggleContent = () => {
    setShowContent(true);
  };

  return (
    <AppContext.Provider value={{ showContent, toggleContent, setContent, content, setTryItYourself, tryItYourself, debug, setDebug }}>
      {children}
    </AppContext.Provider>
  );
};