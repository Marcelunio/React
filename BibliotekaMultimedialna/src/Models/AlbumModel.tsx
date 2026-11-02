import type {ArtModel} from "./ArtModel"
export interface AlbumModel extends ArtModel
{
  /**Autor Albumu */
  author:string;
  /**Gatunek Albumu */
  genre:string;
  /**Lista piosenek */
  songs:Song[];
  
}
export interface Song
{
  /**Nazwa piosenki */
  name:string;
  /**Długość trwania */
  duration:string;

}
export interface SongModel extends Song
{
    /**Nazwa Albumu */
  album:string;
}