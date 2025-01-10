import Header from "./components/Header";
import { Outlet } from "react-router";
import "./App.css";
import { useState } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

const App = () => {
  const [isDark,setIsDark]=useState(JSON.parse(localStorage.getItem('isDarkMode')));
  return (
    <ThemeContext.Provider value={[isDark,setIsDark]}>
    
    <Header />
    <Outlet />
  
   
    </ThemeContext.Provider>
  )
}

export default App