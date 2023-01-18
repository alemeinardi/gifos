import styles from "./index.module.css";

function Buscar({ setHasError }) {
  const myPromise = fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((jsonResponse) => {
      if (jsonResponse.status===200 && jsonResponse.ok)
        console.log(jsonResponse)
      else
        setHasError(true)
    })
    .catch((error) => {
      setHasError(true)
      console.log("ERROR")
      console.log(error)})
};

function Search({ setHasError }) {
  return (
    <nav>
      <h1>¡Inspirate y busc&aacute; los mejores <em>GIFS!</em></h1>
      <img alt="Persons" src="./images/ilustra_header.svg"/>
      <input type="text"></input>
      <button onClick={Buscar({ setHasError })}>bot</button>
    </nav>
  )
}

export default Search;