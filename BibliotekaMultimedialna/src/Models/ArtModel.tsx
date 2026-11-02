export interface ArtModel
{

  /**Obraz przedstawiający utwór */
  image:string;
  /**nazwa utworu */
  name:string;
  /**Data powstania utworu */
  year:number;
}
export function art_model_compare(a:ArtModel,b:ArtModel)
{
  return a.name.localeCompare(b.name);
}