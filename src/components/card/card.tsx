import { Theme } from "misc"
import React, { HTMLAttributes, useContext } from "react"

const Card = (props:HTMLAttributes<HTMLDivElement>)=>{
    const {children, className, style, ...restProps} = props
    const newClassName = `container card ${className ?? ''}`
    const {theme} = useContext(Theme)
    const newStyles = {...style, backgroundColor: theme.thirty, boxShadow: `1.5em 2em 1.2em ${theme.shadow}`}
    return <div className={newClassName} {...restProps}
    style={newStyles}>
        {children}
    </div>
}

export default Card