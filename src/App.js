import { useContext, useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Results from './components/Results';
import Search from './components/Search';
import Message from './components/Message';
import styles from "./styles/loadRunner.css";
import { AppContext } from './contexts/AppContext';

function App() {

  const { searchThis,  
          setOptionsAutocomplete,
          searching, setSearching,
          showAutocomplete, setShowAutocomplete } = useContext(AppContext)

  const [ hasError, setHasError ] = useState(undefined);
  const [ isDarkMode, setIsDarkMode ] = useState(false);
  const [ gifs, setGifs ] = useState([]);

  const apiKey = "VG9bO7GJdqmBTtpxUWV9mQEr11qoH5zV";
  const gifyUrl = "https://api.giphy.com/v1/gifs";

  const MessageBeforeSearch = () => {
    return <h2>Realiz&aacute; tu b&uacute;squeda</h2>
  }

  function startSearch() {
    setSearching(true);
  };

  // Search GIFs
  async function searchGifs() {
    let petition = await fetch(`${gifyUrl}/search?api_key=${apiKey}&q=${searchThis}&limit=15&offset=0&rating=g&lang=es`);
    try {
      let wantedGifs = await petition.json();
      setGifs(wantedGifs.data);
      setHasError(false)
    } catch(e) {
      setHasError(true);
    }
    setSearching(false);
  }

  // Searching GIFs
  useEffect(() => {
    if (searching) {
       searchGifs()
    }
  }, [ searching ])

  // Search autocomplete
  async function searchTags() {
    let petition = await fetch(`${gifyUrl}/search/tags?api_key=${apiKey}&q=${searchThis}&limit=5&offset=0`)
    try {
      let tags = await petition.json()
      setOptionsAutocomplete(tags.data)
      setShowAutocomplete(tags.data.length>0)
      setHasError(false)
    }
    catch (e) {
      setHasError(true)
    }
  }

  useEffect(() => {
    if (!searching) {
    searchThis.length > 0 && searchTags()}
  }, [ searchThis ])

  return (
    <div className={`App ${isDarkMode ? "dark" : ""}`}>
      <Header setIsDarkMode={setIsDarkMode} 
              isDarkMode={isDarkMode} />

      <Search startSearch={startSearch} />

      { searching && <div className="spinner"></div> }

      { hasError === undefined ?
           <MessageBeforeSearch/> : 
           (hasError || gifs.length === 0) && !searching && !showAutocomplete && <Message hasError={hasError} />}
      { gifs.length > 0 && <Results gifs={gifs}/>}
    </div>
  );
}

export default App;