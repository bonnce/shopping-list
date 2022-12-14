import { Theme } from "misc"
import { ButtonHTMLAttributes, DetailedHTMLProps, useContext, useRef } from "react"

const BasicButton = (props:DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,HTMLButtonElement>) =>{
    const {children,
        style,
        className,
        ...restProps} = props
    const {theme} = useContext(Theme)

    const newClassName = `container button ${className || ''}`
    const backgroundColor = style?.backgroundColor || theme.ten
    const color = style?.color || theme.sixty
    const newStyles = {...style, backgroundColor,color,boxShadow: `4px 4px 4px 0 ${theme.shadow}`}

    const buttonRef = useRef<HTMLButtonElement>(null);
    const mouseDown = ()=>{
        if(buttonRef.current) {
            buttonRef.current.style.backgroundColor=theme.sixty
            buttonRef.current.style.boxShadow=`inset 4px 4px 4px 0 ${theme.shadow}`
            buttonRef.current.style.color=theme.ten
        }
    }
    const mouseUp = ()=>{
        if(buttonRef.current){
            buttonRef.current.style.backgroundColor=backgroundColor
            buttonRef.current.style.boxShadow= `4px 4px 4px 0 ${theme.shadow}`
            buttonRef.current.style.color=color
        }
    }

    return <button ref={buttonRef} onMouseDown={mouseDown} onMouseUp={mouseUp} onMouseLeave={mouseUp} onTouchStart={mouseDown}
    onTouchEnd={mouseUp} className={newClassName} {...restProps} style={newStyles}>
        {children}
    </button>
}

export default BasicButton