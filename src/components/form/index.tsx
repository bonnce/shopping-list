import { InputText, InputButton } from "components"
import AutoComplete from "components/input/autocomplete"
import { iProducts, iInputForm, inputType } from "misc"
import { ChangeEventHandler, FormEventHandler, ReactNode, useState } from "react"

const Form = ({inputs, autoComplete, data, children, onSubmit, handleFile} : 
    {inputs:iInputForm[], autoComplete:inputType[], data:string[] | undefined, children?:ReactNode
    onSubmit?:(form:iProducts)=>void, handleFile?:ChangeEventHandler<HTMLInputElement>}) => {

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
        <InputText name={obj.name} type={obj?.type} label={obj.label} key={`${obj.name}${obj.label}`} 
        list={autoComplete.includes(obj.name) ? obj.name : undefined} onChange={handleChange} />  
        {autoComplete.includes(obj.name) && data && <AutoComplete key={`${obj.name}${autoComplete.indexOf(obj.name)}`} values={data} id={obj.name} />} 
        </>
        )}
        <div className="container justify-between wrap fullWidth">
            <InputButton value="Agregar" type="submit"/>
            {children}
        </div>
    </form>
}
export default Form