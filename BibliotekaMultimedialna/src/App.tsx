
import {  useState, type PropsWithChildren } from "react"
import * as data from "./Models/Data"
import type { AlbumModel } from "./Models/AlbumModel";
import { Album } from "./Components/AlbumComponent";
import { Book } from "./Components/BookComponent";
import { Movie } from "./Components/MovieComponent";
import { Section } from "./Components/SectionComponent";
var longestalbum:AlbumModel=data.albums[0];
data.albums.forEach((album)=>{if(longestalbum.songs.length<album.songs.length){longestalbum=album}})
export function App()
{
  return(
  <main className="container">
  <div>
  <Section title="Filmy" contents={data.movies} display_element={Movie} />
  <Section title="Filmy po 2010" contents={data.movies.filter((movie)=>movie.year>2010)} display_element={Movie} />
  <Section title="ksiażki" contents={data.books} display_element={Book} />
  <Section title="ksiażki Rocznikowo" contents={data.books.toSorted((book,book2)=>book2.year-book.year)} display_element={Book} />
  <Section title="Albumy" contents={data.albums} display_element={Album} />
  <Section title="Album o największej ilości tworów" contents={[longestalbum]} display_element={Album} />
  </div>
  </main>)
  
  }
export default App
