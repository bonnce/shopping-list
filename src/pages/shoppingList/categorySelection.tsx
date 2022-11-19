import { BasicButton } from "components"
import { RequiredProduct } from "misc"
import { MouseEventHandler } from "react"

const CategorySelection = ({categories, start, handleClick, list}: 
{categories:string[], start:boolean, handleClick:MouseEventHandler<HTMLButtonElement>, list:{[key: string]:RequiredProduct[]} | undefined}) => 
<div className={`container column gap-md category-container appear ${start  && 'hide'}`}>
    {categories.length > 0 ?
        categories.map((cat, i) =>
        <BasicButton className="category-button" key={cat} id={i.toString()} onClick={handleClick}>{cat}</BasicButton>
        ):
        <p>{list && JSON.stringify(list)}</p>
    }
</div>

export default CategorySelection