import type {ArtModel} from "./ArtModel"
export interface BookModel extends ArtModel
{
  /** Ilość stron książki */
  number_of_pages:number;
}