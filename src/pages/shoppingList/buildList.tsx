import { Database, getAll, NAMECOLLECTION, RequiredProduct } from "misc"
import { filterBy } from "misc/utils"
import { useContext, useEffect, useState } from "react"

const BuildList = ()=>{
    const [list, setList] = useState<RequiredProduct | []>([])
    const [index, setIndex] = useState(0)
    const [dataFiltered, setDataf] = useState<RequiredProduct[][]>()
    const [start, setStart] = useState(true)
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
    return <div className="container column fullWidth shopping-container">
            <div className={`shopping-blackBars ${start ? 'growUp' : ''}`}>

            </div>
            <div className="container fullWidth from-right fade-in">
                    {dataFiltered && <input type="button" value={dataFiltered[0][index].name} />}
            </div>
            <div className={`shopping-blackBars ${start ? 'growUp' : ''}`}>

            </div>
    </div>
}
export default BuildList