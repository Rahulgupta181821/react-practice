import styles from "./Netflix.module.css";
export const SeriesCard = (props) => {
  console.log(props);
  const { name, id, img_url, rating, description, cast, genre, watch_url } =
    props.curElem;
  const btn_style = {
    padding: "1.2rem 2.4rem",
    border: "none",
    fontSize: "1.6rem",
    backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
    color: "#000",
    fontWeight: "bold",
    cursor: "pointer",
  };
  const ratingClass = rating >= 8.5 ?styles.super_hit:styles.average;
  return (
    <li className={styles.card}>
      <div>
        <img src={img_url} alt={name} width="40%" height="40%" />
      </div>
      <div className={styles.card-content}>
        <h1>Name : {name} </h1>
        <h3>
          Rating:
          <span className={`${styles.rating} ${ratingClass}`}>
            {rating}
          </span>
        </h3>
        <p>Summary:{description}</p>
        <p>Genre: {genre}</p>
        <p>Cast: {cast}</p>
        <a href={watch_url} target="_blank">
          <button style={btn_style}>Watch Now</button>
        </a>
      </div>
    </li>
  );
};
