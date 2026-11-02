import { ArtInfo } from "./ArtInfoComponent";
import type { MovieModel } from "../Models/MovieModel";
export function Movie({image,name,year,rating}:MovieModel){
  function handleMovieClick(e: React.MouseEvent<HTMLDivElement>)
  {
    console.log(`Wybrano film: ${name}`)
  }
  return(
    <ArtInfo onClick={handleMovieClick} image={image} name={name} year={year}>
    <ul className="list-group list-group-flush">
    <li  className="list-group-item">{rating.toString()}</li>
    {rating>8 ? (<li className="list-group-item">Polecany</li>) :(<></>)}
    <li className="list-group-item"><button className="btn btn-light" onClick={((e)=>{e.stopPropagation();return console.log(`Pokaż szczegóły dla: ${name}`)})}>pokaż szczegóły dla {name}</button></li>
    </ul>
    </ArtInfo>
  )}
