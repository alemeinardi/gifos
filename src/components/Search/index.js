import styles from "./index.module.css";
import { useContext, useRef } from "react";
import Autocomplete from "../Autocomplete";
import { AppContext } from "../../contexts/AppContext";

function Search({ startSearch }) {

  const { searchThis, setSearchThis, 
          setOptionsAutocomplete,
          showAutocomplete } = useContext(AppContext)

  const searchInput = useRef(null)

  const handleInputChange = (value) => {
    setSearchThis(value);
  }

  const handleSearchClick = () => {
    startSearch()
    showAutocomplete(false)
    searchInput.current.focus()
  }

  const handleKeyDown = (keyDown) => {
    keyDown.key === "Enter" && searchThis !== "" &&  startSearch()
    searchInput.current.focus()
  }

  const handleCancelClick = () => {
    setSearchThis("")
    setOptionsAutocomplete([])
    showAutocomplete(false)
    searchInput.current.focus()
  }

  return (
    <nav>
      <h1>¡Inspirate y busc&aacute; los mejores <em>GIFS!</em></h1>
      <img className={styles.logo} alt="Persons" src="./images/ilustra_header.svg"/>
      <div className={styles.searcher}>
        <input ref={searchInput} 
               type="text" 
               placeholder="Buscar Gif"
               value={searchThis}
               onChange={(event) => handleInputChange(event.target.value)}
               onKeyDown={(event) => handleKeyDown(event)}>
        </input>
        <button className={styles.button} 
                onClick={() => handleSearchClick()}>
        </button>
        <img className={styles.cancel}
             alt="Cancel Button"
             src="./images/close-button.svg"
             onClick={() => handleCancelClick()}></img>
        { showAutocomplete && <Autocomplete startSearch={startSearch}/> }
      </div>
    </nav>
  )
}

export default Search;