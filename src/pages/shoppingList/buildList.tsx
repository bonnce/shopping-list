import { Database, getAll, NAMECOLLECTION, RequiredProduct, timeout } from "misc"
import { filterBy } from "misc/utils"
import { MouseEventHandler, useContext, useEffect, useState } from "react"
import BlackBar from "./blackBar"
import CategorySelection from "./categorySelection"
import CurrentItem from "./currentItem"
import ItemDecision from "./itemDecision"

const BuildList = ()=>{
    const [list, setList] = useState<{[key: string]:RequiredProduct[]}>({})
    const [itemIndex, setItemIndex] = useState(0)
    const [currentCategory, setCurrCategory] = useState('')
    const [dataFiltered, setDataf] = useState<{[key: string]:RequiredProduct[]}>()
    const [categories, setCategories] = useState<string[]>([])
    const [changeStep, setChangeStep] = useState(true)
    const [waitAnimation, setWaitAnimation] = useState(false)
    const db = useContext(Database)
    useEffect(()=>{
        const getAllFilt = async () => {            
            if(db){                
                const data = await getAll(db, NAMECOLLECTION) as RequiredProduct[]
                const sortedData = data.sort((a,b) => b.frequency - a.frequency)
                const filtered = filterBy<RequiredProduct>(sortedData, 'category')
                const allCategorires = Object.keys(filtered)
                setDataf(filtered)
                setCategories(allCategorires)
            }
        }
        getAllFilt()
    },[db])
    const selectCategory:MouseEventHandler<HTMLButtonElement> = async (e)=>{
        const target = e.currentTarget
        const id = Number(target.id)
        setCurrCategory(categories[id])
        const newCategories = [...categories.slice(0,id), ...categories.slice(id+1)]
        setCategories(newCategories)
        handleAnimation()
        await timeout(300)
        handleAnimation()
        handleStep()
    }

    const handleStep = ()=> setChangeStep(prev => !prev)
    const handleAnimation = ()=> setWaitAnimation(prev => !prev)

    const handleItemCount = async ( callback:(param:0|1|-1|2)=>void )=>{
        if(dataFiltered && (itemIndex < dataFiltered[currentCategory].length-1)){            
            setItemIndex(prev => prev +1)
            callback(0)
    }
        else{
        callback(2)
        handleAnimation()
        await timeout(300)
        handleAnimation()
        setItemIndex(0)
        handleStep()
    }
    }

    const addTolist = ()=>{
        const item = dataFiltered?.[currentCategory][itemIndex]
        if(item){
            const newList = {...list, [currentCategory]: list?.[currentCategory] ? [...list[currentCategory],item]: [item]}
            setList(newList)
        }
    }

    return <>{dataFiltered && (!changeStep ?
        <ItemDecision start={waitAnimation} item={dataFiltered[currentCategory][itemIndex]} handleSkip={handleItemCount} handleSuccess={addTolist}  />  :
        <CategorySelection start={waitAnimation} categories={categories} handleClick={selectCategory} list={list} />)
    }</>
}
export default BuildList