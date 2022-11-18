import { Collapse } from "components";
import { Database, getAll, NAMECOLLECTION, RequiredProduct } from "misc";
import { filterBy } from "misc/utils";
import BasicAppPage from "pages/common/basicAppPage";
import { useContext, useEffect, useState } from "react";
import { CollapsedItems } from "./collapsedItems";

const ProductManager = ()=>{
    const [dataFiltered, setDataf] = useState<{[key: string]: RequiredProduct[]}>()
    const [reload, setReload] = useState(true)
    const db = useContext(Database)
    useEffect(()=>{
        const getAllFilt =async () => {
            
            if(db && reload){                
                const data = await getAll(db, NAMECOLLECTION) as RequiredProduct[]
                const filtered = filterBy<RequiredProduct>(data, 'category')
                setDataf(filtered)
                setReload(false)
            }
        }
        getAllFilt()
    },[db,reload])

    const handleChange = () => setReload(true)

return <BasicAppPage title='Administrar productos'>
    <div className="container column gap-md fullWidth">

        {dataFiltered && Object.entries(dataFiltered).map(([category, data]) => <Collapse title={category}>
                {data.map(ele => <CollapsedItems handleEvent={handleChange} ele={ele} key={ele.id} />)}
        </Collapse>)}
    </div>
</BasicAppPage>}

export default ProductManager