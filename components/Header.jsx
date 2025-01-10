import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Header = () => {
const [isDark,setIsDark]=useContext(ThemeContext);

  if(isDark){
    document.body.classList.add('dark');
  }
  else{
    document.body.classList.remove('dark');
  }
  return (
    <>
    <header className={`header-container ${isDark ?'dark':' ' }`}>
      <div className="header-content">
        <h2 className="title">
          <a href="/">Where in the world?</a>
        </h2>
        <p className="theme-changer" onClick={()=>{
          setIsDark(!isDark);
          localStorage.setItem('isDarkMode',!isDark);
        }}>
        <i class={`ri-${isDark==false?'moon' :'sun'}-line`}></i>
          &nbsp;&nbsp;{isDark==false ?'Dark mode' :'Light mode'}
        </p>
      </div>
    </header>
    </>
  )
}

export default Header