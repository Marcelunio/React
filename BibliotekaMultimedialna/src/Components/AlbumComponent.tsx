import type {AlbumModel,Song,SongModel} from "../Models/AlbumModel"
import { ArtInfo } from "./ArtInfoComponent"

function Songs({ songs,album }: { songs: Song[],album:string })
{
  if(songs && songs.length!=0)
  {
  return(
    <table className="table table-striped w-90 table-hover">
      <thead><tr ><th>Nazwa</th><th>Długosc</th></tr></thead>
      <tbody>{songs.map((song,index) =>{return(<Song key={index} name={song.name} duration={song.duration} album={album}></Song>)})}</tbody>
    </table>
  )
  }
  else
  {
    return(<div className="alert alert-danger" role="alert">Brak utworów</div>)
  }
}
function Song({name,duration,album}:SongModel)
{
  function handleSongClick(e:React.MouseEvent<HTMLTableRowElement>,title:string)
  {
    console.log(`Piosenka ${title} z albumu ${album}`)
  }
  //arrow function vs function keyword function
  //Skrócony zapis
  //nie wiążą this i super, dziedziczą z zakresu w którym są

  return(
    <tr onClick={(e)=>{handleSongClick(e,name)}}><td>{name}</td><td className="text-end">{duration}</td></tr>
  )
}
export function Album({image,name,year,author,genre,songs}:AlbumModel) {
  return(
    <div>
      <ArtInfo image={image} name={name} year={year}>
        <ul className="list-group list-group-flush">
        <li  className="list-group-item"> {author}</li>
        <li  className="list-group-item"> {genre}</li>
        <li  className="list-group-item"><Songs album={name} songs={songs} /></li>
        </ul>
      </ArtInfo>
      </div>
  )
}