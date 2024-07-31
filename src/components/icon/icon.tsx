import React from "react"

const Icon = ({icon,alt,className, description,style,onClick}:
    {icon:string,alt:string,style?:React.CSSProperties,onClick?:VoidFunction, description?:string,className?:string})=>
    <div className={className} onClick={onClick}  title={description}>
        <img src={icon} alt={alt} style={style} className='icon' />
    </div>


export default Icon