import harry from "./assets/harry_potter_i_komnata.jpg"
import twoje_imie from  "./assets/twoje_imie.jpg"
import backrooms from "./assets/backroom.jpg"
import tadeusz from "./assets/pan_tadeusz.jpg"
import y1984 from "./assets/1984.webp"
import matematyka from "./assets/matematyka.webp"
import man_bites_dog from "./assets/MBD.jpeg"
import transistor from "./assets/transistor.jpg"
import malo_miasteczkowy from "./assets/małomiasteczkowy.jpeg"
import { useState } from "react"
interface ArtModel
{

  /**Obraz przedstawiający utwór */
  image:string;
  /**nazwa utworu */
  name:string;
  /**Data powstania utworu */
  year:number;
}
interface MovieModel extends ArtModel{
  rating:number;
}
interface BookModel extends ArtModel
{
  /** Ilość stron książki */
  number_of_pages:number;
}
interface AlbumModel extends ArtModel
{
  /**Autor Albumu */
  author:string;
  /**Gatunek Albumu */
  genre:string;
  /**Lista piosenek */
  songs:Song[];
  
}
interface Song
{
  /**Nazwa piosenki */
  name:string;
  /**Długość trwania */
  duration:string;
}
interface SectionModel extends React.PropsWithChildren
{
  title:string;
}
function art_model_compare(a:ArtModel,b:ArtModel)
{
  return a.name.localeCompare(b.name);
}

var movies:MovieModel[]=
[
  {image:harry, name:"Harry Potter i Komnata Tajemnic", year:2002, rating:5},
  {image:twoje_imie, name:"Twoje imię", year:2017,rating:8.8},
  {image:backrooms, name:"Backrooms. Bez wyjścia", year:2026,rating:10}
]
var books:BookModel[]=
[
  
    {image:tadeusz, name:"Pan Tadeusz, czyli ostatni zajazd na litwie", year:1834, number_of_pages:212},
    {image:y1984, name:"Rok 1984", year:1949, number_of_pages:350},
    {image:matematyka, name:"Matematyka olimpijska 1:Algebra i Teoria liczb", number_of_pages:464, year:2018}
]
var albums:AlbumModel[]=
[
  {image:malo_miasteczkowy, name:"Małomiasteczkowy", author:"Dawid Podsiadło", genre:"pop", year:2018, songs:
  [{ name: "Cantate Tutti", duration: "3:08" },
  { name: "Dżins", duration: "5:11" },
  { name: "Małomiasteczkowy", duration: "3:24" },
  { name: "Najnowszy klip", duration: "3:50" },
  { name: "Trofea", duration: "3:46" },
  { name: "Nie ma fal", duration: "3:58" },
  { name: "LIS", duration: "4:30" },
  { name: "Co mówimy?", duration: "3:38" },
  { name: "Nie kłami", duration: "3:15" },
  { name: "Matylda", duration: "5:13" }]},
  {
    image:man_bites_dog, name:"Man bites Dog", author:"Femtanyl", genre:"breakcore", year:2026, songs:[{ name: "Body the Pistol", duration: "2:38" },
  { name: "Video Nasty", duration: "3:02" },
  { name: "Sick of It", duration: "3:10" },
  { name: "Helltarget", duration: "3:41" },
  { name: "City", duration: "2:52" },
  { name: "Head Up", duration: "3:25" },
  { name: "My Head Hurts", duration: "2:46" },
  { name: "Shows You the Way to the Hiway", duration: "2:42" },
  { name: "Man Bites Dog", duration: "3:48" },
  { name: "Is This It", duration: "3:57" }]
  },
  {  image:transistor, name:"Transistor Original Soundtrack", author:"Darren Korb", genre:"Game music", year:2014, songs:[{ name: "Old Friends", duration: "3:21" },
  { name: "Stained Glass", duration: "2:11" },
  { name: "Forecast", duration: "2:39" },
  { name: "The Spine", duration: "3:14" },
  { name: "Coasting", duration: "3:29" },
  { name: "Vanishing Point", duration: "3:40" },
  { name: "Traces", duration: "2:02" },
  { name: "Water Wall", duration: "3:56" },
  { name: "Cut Apart", duration: "0:52" },
  { name: "In Circles", duration: "3:26" },
  { name: "Gold Leaf", duration: "2:43" },
  { name: "Heightmap", duration: "4:23" },
  { name: "Dormant", duration: "2:51" },
  { name: "Apex Beat", duration: "3:10" },
  { name: "Gateless", duration: "4:19" },
  { name: "Sandbox", duration: "3:29" },
  { name: "We All Become", duration: "2:29" },
  { name: "Interlace", duration: "4:06" },
  { name: "Tangent", duration: "3:23" },
  { name: "Signals", duration: "2:55" },
  { name: "Impossible", duration: "4:40" },
  { name: "Blank Canvas", duration: "0:52" },
  { name: "Paper Boats", duration: "4:00" },
  { name: "She Shines", duration: "4:06" }]}
]

movies.sort(art_model_compare);
books.sort(art_model_compare);
albums.sort(art_model_compare);



function BasicArtInfo({image,name,year}:ArtModel)
{
    return (
      <>
        <img src={image} alt={name}/>
        <h3>{name}</h3>
        <span>{year}</span>
      </>
    )
}
function Movie({image,name,year,rating}:MovieModel){
  return(
    <div>
    <BasicArtInfo image={image} name={name} year={year} />
    <h4>{rating.toString()}</h4>
    <h5>{rating>8 ? "Polecany" : ""}</h5>
    </div>
  )}

function Book({image,name,year,number_of_pages}:BookModel)
{
return(
  <div>
    <BasicArtInfo image={image} name={name} year={year} />
    <h4>{number_of_pages}</h4>
    <h5>{year<2000 ? "Klasyka" : ""}</h5>
  </div>
  )
}
function Songs({ songs }: { songs: Song[] })
{
  if(songs!=null)
  {
  return(
    <table>
      <tr><th>Nazwa</th><th>Długosc</th></tr>
      {songs.map((song) =>{return(<Song name={song.name} duration={song.duration}></Song>)})}
    </table>
  )
  }
  else
  {
    return(<span>Brak utworów</span>)
  }
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
 var max:number=0
    albums.forEach((album)=>{if(max<album.songs.length){max=album.songs.length}})

function Section({title,children}:SectionModel)
{
    function openClose()
    {
        setIsOpen(!isOpen)
    }
    const [isOpen,setIsOpen]=useState(true);
    return(<div>
          <h2  onClick={openClose}>{title} {(isOpen) ? (<>⏷</>):(<>⏵</>)}</h2>
          <hr />
          {isOpen ? (<div>{children}</div>) :(<></>)}
          </div>)
}
let booksYear=[...books];
export function App()
{
  return(
  <>
  <div>
  <Section title="Filmy">
  {movies.map((movie)=>{return(<Movie{...movie} />)})}
  </Section>
  <Section title="Filmy po 2010">
  {movies.filter((movie)=>movie.year>2010).map((movie)=>{return(<Movie {...movie} />)})}
  </Section>
  <Section title="ksiażki">
  {books.map((book)=>{return(<Book {...book} />)})}
  </Section>
  <Section title="ksiażki Rocznikowo">
  {booksYear.sort((book,book2)=>book2.year-book.year).map((book)=>{return(<Book {...book} />)})}
  </Section>
  <Section title="Albumy">
  {albums.map((album)=>{return(<Album {...album}/>)})}  
  </Section>
  <Section title="Album o największej ilości tworów">


  </Section>
  </div>
  </>)//do zrobienia album o największej ilości elementów
  
  }
export default App
