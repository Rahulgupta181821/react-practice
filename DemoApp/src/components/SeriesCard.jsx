import './NetflixSeries.css'
export const SeriesCard = (props) => {
    console.log(props)
    const {name,id,img_url,rating,description,cast,genre,watch_url} = props.curElem
  return (
    <li className="card">
      <div>
        <img src={img_url} alt={name} width="40%" height="40%" />
      </div>
      <div className="card-content">
      <h1>Name : {name} </h1>
      <h3>Rating:{rating}</h3>
      <p>Summary:{description}</p>
      <p>Genre: {genre}</p>
      <p>Cast: {cast}</p>
      <a href={watch_url} target="_blank">
        <button style={{
          padding:"1.2rem 2.4rem",
        }}>Watch Now</button>
      </a>
      </div>
    </li>
  );
};
