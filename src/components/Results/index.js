import styles from "./index.module.css";

function Results( { gifs} ) {
  return (
  <main>
    <h2>Resultados de tu b&uacute;squeda</h2>
    <div className={styles.gif__box}>
      { gifs.map((gif) => {
        return (
          <div className={styles.gif} 
               key={gif.slug}>
               <a key={gif.id}
                  href={gif.url}
                  target="blank">
                  <img alt={gif.tit}
                       src={gif.images.downsized_medium.url}>
                  </img>
              </a>
          </div>
        )
      })}
    </div>
  </main>)
}

export default Results;