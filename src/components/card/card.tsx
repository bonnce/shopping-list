import { Theme } from "misc"
import React, { HTMLAttributes, useContext } from "react"

const Card = (props:HTMLAttributes<HTMLDivElement>)=>{
    const {children, className, style, ...restProps} = props
    const newClassName = `container card ${className ?? ''}`
    const {theme} = useContext(Theme)
    const newStyles = {...style, backgroundColor: theme.thirty, boxShadow: `0 2px 5px 2px ${theme.sixty}, 0 7px 20px 0px ${theme.thirty}`}
    return <div className={newClassName} {...restProps}
    style={newStyles}>
        {children}
    </div>
}

export default Card