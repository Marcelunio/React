import type { ArtModel } from "../Models/ArtModel"
import type { PropsWithChildren } from "react"
interface ArtModelChildren extends ArtModel,PropsWithChildren
{
  onClick?:(e:React.MouseEvent<HTMLDivElement>)=>(void)
}

export function ArtInfo({image,name,year,children,onClick}:ArtModelChildren)
{
    return (
      <div className="card col " onClick={onClick}>
        <img src={image} alt={name} className="card-img-top "/>
        <div className="card-body">
          <h3 className="card-title">{name}</h3>
          <span className="card-subtitle fw-lighter">{year}</span> 
        </div>
          {children}
      </div>
    )
}