import { BasicButton } from "components"
import { RequiredProduct } from "misc"
import { MouseEventHandler } from "react"
import SendShoppingList from "./send-shopping-list"

interface iCategory {
    categories:string[],
    start:boolean,
    list:{[key: string]:RequiredProduct[]},
    handleClick:MouseEventHandler<HTMLButtonElement>,
    handleRestart:VoidFunction,
    handleEnd:VoidFunction
}

const CategorySelection = (props:iCategory) => {
    const {categories,
    start,
    list,
    handleClick,
    handleRestart,
    handleEnd} = props
    return <div className={`container column gap-md category-container appear ${start  && 'hide'}`}>
    {categories.length < 1 && !start  ?
        <SendShoppingList list={list} /> :
        categories.map((cat, i) =>
        <BasicButton className="category-button" themeColor="thirty" key={cat} id={i.toString()} onClick={handleClick}>{cat}</BasicButton>)
    }
    {(categories.length < 1 && !start ) ||
        <BasicButton className="category-button action-buttons" id={'finish'} style={{backgroundColor: '#a21904', color:'#fff', right:'5%'}}
        onClick={handleEnd}>Finalizar</BasicButton>
    }
        <BasicButton className="category-button action-buttons" id={'restart'} style={{left:'5%'}}
        onClick={handleRestart}>Restart</BasicButton>
</div>}

export default CategorySelection