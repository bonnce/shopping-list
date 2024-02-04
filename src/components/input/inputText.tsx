import { Theme } from "misc"
import React, { ChangeEventHandler, useContext, useEffect, useId, useState } from "react"

const InputText = ({name, label, list, type , onChange , defaultValue} : 
    {name:string, label:string, list?:string, type?:string , onChange?:ChangeEventHandler<HTMLInputElement>, defaultValue?:string})=>{
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
        <label htmlFor={id} className='label-text' style={{color:theme.text, WebkitTextStrokeColor:theme.ten}}>
            {label}
        </label>
        <input type={type ?? "text"} name={name} id={id} value={value} required autoComplete={list ? 'off' : 'on'}
        className='input-text' onChange={handleChange} list={list}
        style = {{backgroundColor: theme.sixty, color:theme.text}} />
    </div>
}

export default InputText