import styles from "./index.module.css";

function Header({ setIsDarkMode, isDarkMode }) {
  return (
  <header>
    <div className={styles.line}></div>
    <div className={styles.logo}>
      <img alt="Gifos's logo" src="./images/logo-desktop.svg"/>
      <button onClick={(e) => setIsDarkMode(!isDarkMode)}>{`MODO ${isDarkMode ? "LIGHT" : "DARK"}`}</button>
    </div>
  </header> )
}

export default Header;