import type { ArtModel } from "../Models/ArtModel";
import { useState } from "react";
interface SectionModel
{
  /**Tytuł sekcji */
  title:string;
  /**Zawartość danej sekcji pochodna ArtModel */
  contents:ArtModel[];
  /** funkcja odpowiedzialna za obsługę danych typu danej pochodnej ArtModel */
  display_element:any;
}

export function Section({title,contents,display_element}:SectionModel)
{
    let [search_phrase,setSearchPhrase]=useState("");
    function handleOnChange(event: React.ChangeEvent<HTMLInputElement>)
    {
      console.log(event.target.value);
      setSearchPhrase(event.target.value)
    }
    function openClose()
    {
        setIsOpen(!isOpen) 
    }
    const [isOpen,setIsOpen]=useState(true);
    /** zawartość contents przefiltrowana przez search_phrase */ 
    let filtered =contents.filter((element)=>element.name.includes(search_phrase)|| search_phrase=="")
    return(<div>
          <h2   onClick={openClose}>{title}{(search_phrase!="") ? (<>-filtr </>):(<></>)}{search_phrase} {(isOpen) ? (<>⏷</>):(<>⏵</>)}</h2><input onChange={handleOnChange} type="text" className="form-control" placeholder="wyszukaj"/>
          <hr />
          {isOpen ?
           (<div className="row  row-cols-3">
            {(filtered.length>0) ? 
            filtered.map((element)=>{return(<>{display_element({...element})}</>)})
            :
            (<div className="alert alert-danger" role="alert">Brak filmów</div>)}</div>)
          :(<></>)}
          </div>)
}