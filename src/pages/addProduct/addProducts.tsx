import { Card, Form } from "components"
import { Database, iInputForm, iProducts, NAMECOLLECTION, save } from "misc"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"

const INPUTS: iInputForm[] = [{name:"name",label:'Nombre'}, {name:"frequency",label:'Frecuencia'}, {name:"category",label:'Category'}]
const AddProduct = ()=>{
    const navigate = useNavigate()
    const db = useContext(Database)
    const handleSubmit = async (formData:iProducts)=>{
        if(db){
            await save(db,NAMECOLLECTION,formData)
            navigate(0)
        }
    }
return <Card className='card-form'>
    <div className="container column gap-md">
        <h2 className="form-title">Nuevo Producto</h2>
        <Form inputs={INPUTS} onSubmit={handleSubmit}/>
    </div>
</Card>
}
export default AddProduct