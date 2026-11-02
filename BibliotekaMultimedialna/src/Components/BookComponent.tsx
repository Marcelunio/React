import { ArtInfo } from "./ArtInfoComponent" 
import type { BookModel } from "../Models/BookModel"
export function Book({image,name,year,number_of_pages}:BookModel)
{
return(
    <ArtInfo image={image} name={name} year={year}>
    <ul className="list-group list-group-flush">
    <li  className="list-group-item"> {number_of_pages}</li>
    {year<2000 ? (<li className="list-group-item">Klasyka</li>) :(<></>)}
    </ul>
  </ArtInfo>
  )
}