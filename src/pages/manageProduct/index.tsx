import { Collapse } from "components";
import { Database, getAll, iProducts, NAMECOLLECTION, RequiredProduct } from "misc";
import { filterBy } from "misc/utils";
import BasicAppPage from "pages/common/basicAppPage";
import { useContext, useEffect, useState } from "react";
import { CollapsedItems } from "./collapsedItems";
import ClearDatabase from "./clearDatabase";
import ExportCSV from "./exportCSV";

const ProductManager = ()=>{
    const [dataFiltered, setDataf] = useState<{[key: string]: RequiredProduct[]}>()
    const [genericData, setGenericData] = useState<Required<iProducts>[]>()
    const [reload, setReload] = useState(true)
    const db = useContext(Database)
    useEffect(()=>{
        const getAllFilt =async () => {
            
            if(db && reload){                
                const data = await getAll(db, NAMECOLLECTION) as RequiredProduct[]
                setGenericData(data)
                const filtered = filterBy<RequiredProduct>(data, 'category')
                setDataf(Object.keys(filtered).length > 0 ? filtered : undefined)
                setReload(false)
            }
        }
        getAllFilt()
    },[db,reload])
    const handleChange = () => setReload(true)

return <BasicAppPage title='Administrar productos'>
    {dataFiltered != null ? 
        <div className="container column gap-md fullWidth">
            {Object.entries(dataFiltered).map(([category, data]) => <Collapse title={category}>
                    {data.map(ele => <CollapsedItems handleEvent={handleChange} ele={ele} key={ele.id} />)}
            </Collapse>)}
        <ExportCSV products={genericData}/>
        <ClearDatabase db={db} onClear={handleChange} />
        </div> : 
        <h2 className="guide-title">No hay nada aqui... &#128584;</h2>
    }
</BasicAppPage>}
export default ProductManager