import { Database, getAll, NAMECOLLECTION, RequiredProduct } from "misc"
import { filterBy } from "misc/utils"
import { useContext, useEffect, useState } from "react"

const BuildList = ()=>{
    const [list, setList] = useState<RequiredProduct | []>([])
    const [dataFiltered, setDataf] = useState<RequiredProduct[][]>()
    const db = useContext(Database)
    useEffect(()=>{
        const getAllFilt = async () => {            
            if(db){                
                const data = await getAll(db, NAMECOLLECTION) as RequiredProduct[]
                const filtered = filterBy<RequiredProduct>(data, 'category')
                setDataf(filtered)
            }
        }
        getAllFilt()
    },[db])
    return <div className="container fullWidth shopping-container">
            <div className="container">

            </div>
            <div className="container">

            </div>
            <div className="container">

            </div>
    </div>
}
export default BuildList