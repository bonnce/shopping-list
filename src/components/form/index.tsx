import { InputText, InputButton } from "components"
import AutoComplete from "components/input/autocomplete"
import { iProducts, iInputForm, inputType } from "misc"
import { ChangeEventHandler, FormEventHandler, useState } from "react"

const Form = ({inputs, autoComplete, data, onSubmit} : 
    {inputs:iInputForm[], autoComplete:inputType[], data:string[] | undefined, onSubmit?:(form:iProducts)=>void}) => {

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
        {inputs.map((obj) => <>
        <InputText name={obj.name} label={obj.label} key={`${obj.name}${obj.label}`} 
        list={autoComplete.includes(obj.name) ? obj.name : undefined} onChange={handleChange} />  
        {autoComplete.includes(obj.name) && data && <AutoComplete key={`${obj.name}${autoComplete.indexOf(obj.name)}`} values={data} id={obj.name} />} 
        </>
        )}
        <InputButton name="Agregar" />
    </form>
}
export default Form