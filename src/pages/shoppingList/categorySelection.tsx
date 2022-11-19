import { BasicButton } from "components"
import { RequiredProduct } from "misc"
import { MouseEventHandler } from "react"
import SendShoppingList from "./send-shopping-list"

const CategorySelection = ({categories, start, handleClick, list}: 
{categories:string[], start:boolean, handleClick:MouseEventHandler<HTMLButtonElement>, list:{[key: string]:RequiredProduct[]}}) => 
<div className={`container column gap-md category-container appear ${start  && 'hide'}`}>
    {categories.length > 0 ?
        categories.map((cat, i) =>
        <BasicButton className="category-button" key={cat} id={i.toString()} onClick={handleClick}>{cat}</BasicButton>
        ):
        <SendShoppingList list={list} />
    }
</div>

export default CategorySelection