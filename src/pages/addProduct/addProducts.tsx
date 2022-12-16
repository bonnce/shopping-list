import { Card, Form } from "components"
import { Database, getAll, iInputForm, inputType, iProducts, NAMECOLLECTION, RequiredProduct, save } from "misc"
import { deleteEquals } from "misc/utils"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import AddCSV from "./addCSV"

const INPUTS: iInputForm[] = [{name:"name",label:'Nombre'}, {name:"frequency",label:'Frecuencia'}, {name:"category",label:'Categoria'}]

const AddProduct = ()=>{
    const autoComplete:inputType[] = ['category']
    const [data, setData] = useState<string[]>()
    const navigate = useNavigate()
    const db = useContext(Database)
    const handleSubmit = async (formData:iProducts)=>{
        if(db){
            await save(db,NAMECOLLECTION,formData)
            navigate(0)
        }
    }


    useEffect(()=>{
        const getAllData = async ()=>{

            if(db){
                const allData = await getAll(db,NAMECOLLECTION) as RequiredProduct[]
                const sortedData = allData.sort((a,b) => b.id - a.id)
                const categories = deleteEquals(sortedData.map(ele => ele.category))
                setData(categories)
            }
        }
        getAllData()
    },[db])
    return (
    <Card className='card-form'>
        <div className="container column gap-md">
            <h2 className="form-title">Nuevo Producto</h2>
            <Form inputs={INPUTS} autoComplete={autoComplete} data={data} onSubmit={handleSubmit}>
            <AddCSV/>
            </Form>
        </div>
    </Card>)
}
export default AddProduct