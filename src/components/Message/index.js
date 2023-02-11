import styles from "./index.module.css";

function Message( { hasError } ) {
  return (
    <footer>
      { hasError ? 
        <h3>Lo sentimos, se ha producido un error.</h3> : 
        <h3>Lo sentimos, no encontramos lo que buscas<br/>
        <em>¡Int&eacute;ntalo de nuevo!</em></h3> }
    </footer>)
}

export default Message;