import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Results from './components/Results';
import Search from './components/Search';
import Message from './components/Message';

function App() {
  const [ hasError, setHasError ] = useState(false);
  const [ isDarkMode, setIsDarkMode ] = useState(false);

  return (
    <div className={`App ${isDarkMode ? "dark" : ""}`}>
      <Header setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode}/>
      <Search setHasError={setHasError}/>
      { hasError ? <Message/> : <Results/>}
    </div>
  );
}

export default App;
