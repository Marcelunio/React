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
    <span>{number_of_pages}</span>
  </div>
  )}


export function App()
{
  return(
  <>
    <Movie image={harry} name="Harry Potter i Komnata Tajemnic" year={2002}></Movie>
    <Movie image={YN} name="Twoje imię" year={2017}/>
    <Movie image={backrooms} name="Backrooms. Bez wyjścia" year={2026} />
  </>)
  }
export default App
