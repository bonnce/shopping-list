import { RequiredProduct } from "misc"
import { MouseEventHandler } from "react"

const CategorySelection = ({categories, start, handleClick, list}: 
{categories:string[], start:boolean, handleClick:MouseEventHandler<HTMLButtonElement>, list:{[key: string]:RequiredProduct[]} | undefined}) => 
<div className={`container column gap-md mg-top-3 'appear' ${start  && 'hide'}`}>
    {categories.length > 0 ?
        categories.map((cat, i) =>
        <button style={{fontSize:'2em', padding:'1em'}} key={cat} id={i.toString()} onClick={handleClick}>{cat}</button>
        ):
        <p>{list && JSON.stringify(list)}</p>
    }
</div>

export default CategorySelection