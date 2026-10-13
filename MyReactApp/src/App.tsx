// interface Greeted
// {
//   /** Imię do powitania */
//    name:string;
//    /**opcjonalne Wiek osoby */
//    age?:number;
//    /** opcjonalnie customowe powitanie */
//    greeting ?:string;
//    gentle ?:boolean;
// }

// function Greeter({name,age=18,greeting,gentle}:Greeted) {

//   if(greeting==null)
//   {
//   if( age <30)
//   {
//     greeting="Witaj"
//   }
//   else
//   {
//     greeting="Dzień dobry"
//   }
// }
//   return (
//     <p>{greeting} {name}{gentle ? ".":"!" }</p>
//   )
// }

// export function App()
// {
//   return (
//     <>
//     <Greeter name="Mario" age={30} />
//     <Greeter name="strict" age={20}/>
//     <Greeter name="abs" age={40} greeting="Proszę podać się do dymisji"/>
//     </>
//   )
// }

import harry from "./assets/harry_potter_i_komnata.jpg"
import YN from  "./assets/twoje_imie.jpg"
import backrooms from "./assets/backroom.jpg"
import Tadeusz from "./assets/pan_tadeusz.jpg"
interface ArtModel
{
  image:string;
  name:string;
  year:number;
}
interface MovieModel extends ArtModel{}
interface BookModel extends ArtModel
{
  number_of_pages:number;
}
interface AlbumModel extends ArtModel
{
  author:string;
  genre:string;
  songs:Song[];
  
}
interface Song
{
  name:string;
  duration:string;
}
function BasicArtInfo({image,name,year}:ArtModel)
{
    return (
      <div>
        <img src={image} alt={name}/>
        <h3>{name}</h3>
        <span>{year}</span>
      </div>
    )
}
function Movie({image,name,year}:MovieModel){
  return(
    <BasicArtInfo image={image} name={name} year={year} />
  )}

function Book({image,name,year,number_of_pages}:BookModel)
{
return(
  <div>
    <BasicArtInfo image={image} name={name} year={year} />
    <h4>{number_of_pages}</h4>
  </div>
  )
}
function Songs({ songs }: { songs: Song[] })
{
  return(
    <table>
      <tr><th>Nazwa</th><th>Długosc</th></tr>
      {songs.map((song) =>{return(<Song name={song.name} duration={song.duration}></Song>)})}
    </table>
  )
}
function Song({name,duration}:Song)
{
  return(
    <tr><th>{name}</th><th>{duration}</th></tr>
  )
}
function Album({image,name,year,author,genre,songs}:AlbumModel) {
  return(
    <div>
      <BasicArtInfo image={image} name={name} year={year} />
      <h4>{author}</h4>
      <p>{genre}</p>
      <Songs songs={songs}></Songs>
    </div>
  )
}


export function App()
{
  return(
  <>
    <Movie image={harry} name="Harry Potter i Komnata Tajemnic" year={2002}></Movie>
    <Movie image={YN} name="Twoje imię" year={2017}/>
    <Movie image={backrooms} name="Backrooms. Bez wyjścia" year={2026} />
    <Book image={Tadeusz} name="Pan Tadeusz, czyli ostatni zajazd na litwie" year={1834} number_of_pages={212}></Book>
  </>)
  }
export default App
