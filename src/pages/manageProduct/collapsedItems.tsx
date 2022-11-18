import { InvisibleInput } from "components";
import { Database, NAMECOLLECTION, remove, RequiredProduct, timeout, update } from "misc";
import { ChangeEventHandler, useContext, useState } from "react";
import { TrashButton } from "./trashButton";

export const CollapsedItems = ({ele, handleEvent}:{ele:RequiredProduct, handleEvent:VoidFunction})=> {
const db = useContext(Database)
const [deleted, setDeleted] = useState(false)

const handleChange:ChangeEventHandler<HTMLInputElement>  = async (e)=>{
    if(e.currentTarget && db){
        const name = e.currentTarget.name
        const value = e.currentTarget.value
        const newProduct:RequiredProduct = {...ele, [e.currentTarget.name]: name=== 'frequency' ? Number(value): value}
        await update(db,NAMECOLLECTION, newProduct)
        handleEvent()
    }
}

const handleDelete = async ()=>{
    if(db){
        await remove(db,NAMECOLLECTION, ele.id)
        setDeleted(true)
        await timeout(750)
        handleEvent()
    }
}

return <div className = {`container-grid col-5 fullWidth ${deleted ? 'vanish': ''}`}>
    <InvisibleInput onChange={handleChange} className="col-1x4" name='name' label="name" defaultValue={ele.name} />
    <InvisibleInput onChange={handleChange} name='frequency' label="frequency" defaultValue={ele.frequency.toString()} />
    <TrashButton onClick={handleDelete}/>
</div>}