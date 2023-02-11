import { useState, createContext } from "react";

export const AppContext = createContext()

export const AppProvider = (props) => {
  const [ searchThis, setSearchThis ] = useState("")
  const [ optionsAutocomplete, setOptionsAutocomplete ] = useState([])
  const [ searching, setSearching ] = useState(false)
  const [ showAutocomplete, setShowAutocomplete ] = useState(false)

  return (
    <AppContext.Provider value={{ 
      searchThis,
      setSearchThis,
      optionsAutocomplete,
      setOptionsAutocomplete,
      searching, 
      setSearching,
      showAutocomplete,
      setShowAutocomplete }}>
      {props.children}
    </AppContext.Provider>
  );
}