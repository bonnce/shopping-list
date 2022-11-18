import { Theme } from "misc"
import React, { useContext } from "react"

const Card = ({children, className} : {children:React.ReactNode, className?:String})=>{
    const newClassName = `container card ${className ?? ''}`
    const {theme} = useContext(Theme)
    return <div className={newClassName} style={{backgroundColor: theme.thirty, boxShadow: `1.5em 2em 1.2em ${theme.shadow}`}}>
        {children}
    </div>
}

export default Card