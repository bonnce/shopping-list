import { Theme } from "misc"
import { ChangeEventHandler, useContext, useEffect, useId, useState } from "react"

const InvisibleInput = ({name, label,onChange,className, defaultValue, inputType} : 
    {name:string,className?:string, label:string,onChange?:ChangeEventHandler<HTMLInputElement>,defaultValue:string,
    inputType?:string})=>{
    const id = useId()
    const [value,setValue] = useState(defaultValue || '')
    const handleChange:ChangeEventHandler<HTMLInputElement> = (e)=>{
        setValue(e.currentTarget.value)
        onChange?.(e)
    }

    useEffect(()=>{
        setValue(defaultValue)
    },[defaultValue])

    const inputClassName = `container column align-start gap-xsmr ${className || ''}`
    const {theme} = useContext(Theme)
    return <div className={inputClassName}>
        <label htmlFor={id} className='label-invisible-text' style={{color:theme.text}}>
            {label}
        </label>
            <input type={inputType} name={name} id={id} value={value} 
            className='input-invisible-text fullWidth' onChange={handleChange}
            style = {{color:theme.text}} />        
    </div>
}

export default InvisibleInput