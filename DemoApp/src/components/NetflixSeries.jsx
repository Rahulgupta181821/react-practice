  import seriesData from "../api/seriesData.json"
import { SeriesCard } from "./SeriesCard"
import './Netflix.css'
const  NetflixSeries = () => {
    // const name = 'Queen of Tears'
    // const rating = '8.2'
    // const summary = "Thanks for the update. Since npx tailwindcss init -p still throws could not determine executable to run, it likely means the Tailwind CLI isn't being correctly installed or recognized."
    // let age = 11;
    // const returnGenre = () => {
    //     const genre = "RomCom"
    //     return genre
    // };
    // // let canWatch = "Not available";
    // // if (age>=18) canWatch = "Watch Now"
    // const canWatch = () => {
    //     if (age>=18) return "Watch Now"
    //     return "Not available"
    // }


    // 1.
// if (age < 18){
//     return(
//     <div>
//         <div>
//             <img src='qot.jpg' alt='qot.jpg' width="40%" height="40%"/>
//         </div>
//         <h1>Name : {name} </h1>
//         <h3>Rating:{rating}</h3>
//         <p>Summary:{summary}</p>
//         <p>Genre: {returnGenre()}</p>
//         <button>Not available</button>
//     </div>
//   )
// }


  return(
    <ul className="container">
        {seriesData.map((curElem) => (
         <SeriesCard key = {curElem.id} curElem = {curElem}/>
        ))}
    </ul>
  )
}

export default NetflixSeries