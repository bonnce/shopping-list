import { Theme } from "misc"
import React, { ChangeEventHandler, useContext, useId, useState } from "react"

const InputText = ({name, label, onChange} : 
    {name:string, label:string, onChange?:ChangeEventHandler<HTMLInputElement>})=>{
    const id = useId()
    const [value,setValue] = useState('')
    const handleChange:ChangeEventHandler<HTMLInputElement> = (e)=>{
        setValue(e.currentTarget.value)
        onChange?.(e)
    }
    const {theme} = useContext(Theme)
    return <div className="container column align-start gap-xsm">
        <label htmlFor={id} className='label-text' style={{color:theme.text}}>
            {label}
        </label>
        <input type="text" name={name} id={id} value={value} 
        className='input-text' onChange={handleChange}
        style = {{backgroundColor: theme.sixty, border: `2px solid ${theme.ten}`, color:theme.text}} />
    </div>
}

export default InputText