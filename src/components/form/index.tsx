import { InputText, InputButton } from "components"
import { iProducts, iInputForm } from "misc"
import { ChangeEventHandler, FormEventHandler, useState } from "react"

const Form = ({inputs, onSubmit} : 
    {inputs:iInputForm[],onSubmit?:(form:iProducts)=>void}) => {

    const [formData,setFormData] = useState<iProducts>({name:'', frequency:0 ,category:''})

    const handleChange:ChangeEventHandler<HTMLInputElement> = (e)=>{
        const target = e.currentTarget
        const data = {
            [target.name]: target.name === 'frequency' ? Number(target.value) : target.value
        }
        setFormData((prev)=> ({...prev,...data}))
    }
    const handleSubmit:FormEventHandler<HTMLFormElement> = (e)=>{
        e.preventDefault()
        onSubmit?.(formData)
    }
    return <form className="container column gap-md" onSubmit={handleSubmit}>
        {inputs.map((obj) => <InputText name={obj.name} label={obj.label} key={obj.name} onChange={handleChange} />  )}
        <InputButton name="Agregar" />
    </form>
}
export default Form