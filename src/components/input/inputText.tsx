import { Theme } from "misc"
import React, { ChangeEventHandler, useContext, useEffect, useId, useState } from "react"

const InputText = ({name, label, onChange , defaultValue} : 
    {name:string, label:string, onChange?:ChangeEventHandler<HTMLInputElement>, defaultValue?:string})=>{
    const id = useId()
    const [value,setValue] = useState(defaultValue || '')
    const handleChange:ChangeEventHandler<HTMLInputElement> = (e)=>{
        setValue(e.currentTarget.value)
        onChange?.(e)
    }
    const {theme} = useContext(Theme)

    useEffect(()=>{
        if(defaultValue)
        setValue(defaultValue)
    },[defaultValue])

    return <div className="container column align-start gap-xsm">
        <label htmlFor={id} className='label-text'>
            {label}
        </label>
        <input type="text" name={name} id={id} value={value} required 
        className='input-text' onChange={handleChange}
        style = {{backgroundColor: theme.sixty, border: `2px solid ${theme.ten}`, color:theme.text}} />
    </div>
}

export default InputText