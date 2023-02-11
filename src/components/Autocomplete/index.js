import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import styles from "./index.module.css";

function Autocomplete({startSearch}) {

  const { optionsAutocomplete, setSearchThis, setShowAutocomplete } = useContext(AppContext)

  const handleClick = (e) => {
    setShowAutocomplete(false)
    setSearchThis(e.target.innerText)
    startSearch()
  }

  return (
    <ul className={styles.autocomplete}>
      {optionsAutocomplete.map((o, i) => 
      <li key={i}
          onClick={(e) => handleClick(e)}>
        <img alt="search"
             src="./images/icon-search-autocomplete.svg " />
        {o.name}</li>)}
    </ul>
  )
}

export default Autocomplete;