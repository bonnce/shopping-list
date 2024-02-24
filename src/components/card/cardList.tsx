import { Theme } from "misc"
import { HTMLAttributes, useContext } from "react"

const CardList = (props:HTMLAttributes<HTMLLIElement>)=>{
    const {children, className, style, ...restProps} = props
    const newClassName = `card-list ${className ?? ''}`
    const {theme} = useContext(Theme)
    const newStyles = {backgroundColor: theme.thirty, boxShadow: `0 2px 5px 2px ${theme.sixty}, 0 7px 20px 0px ${theme.thirty}`,...style}
    return <li className={newClassName} {...restProps}
    style={newStyles}>
        {children}
    </li>
}

export default CardList