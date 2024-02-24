import { Theme } from "misc"
import { ButtonHTMLAttributes, DetailedHTMLProps, useContext, useRef } from "react"

const BasicButton = (props:DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,HTMLButtonElement> & {themeColor?: "ten" | "sixty" | "thirty" }) =>{
    const {children,
        style,
        className,
        themeColor,
        disabled,
        ...restProps} = props
    const {theme} = useContext(Theme)
    const themeBackground = themeColor ? theme[themeColor] : theme.ten

    const newClassName = `container button ${className || ''}`
    const backgroundColor = disabled ? '#ccc' : (style?.backgroundColor || themeBackground)
    const color = style?.color || (themeColor ? theme.ten : theme.sixty)
    const boxShadow = disabled ? 'none' : (style?.backgroundColor || `0 2px 5px 2px ${theme.sixty}, 0 5px 8px 0px ${themeBackground}55`)
    const newStyles = {...style,backgroundColor,color,boxShadow}

    const buttonRef = useRef<HTMLButtonElement>(null);
    const mouseDown = ()=>{
        if(buttonRef.current && !disabled) {
            buttonRef.current.style.backgroundColor=theme.sixty
            buttonRef.current.style.boxShadow=`inset 4px 4px 4px 0 ${theme.shadow}`
            buttonRef.current.style.color=themeBackground
        }
    }
    const mouseUp = ()=>{
        if(buttonRef.current && !disabled){
            buttonRef.current.style.backgroundColor=backgroundColor
            buttonRef.current.style.boxShadow= boxShadow
            buttonRef.current.style.color=color
        }
    }

    return <button ref={buttonRef} onMouseDown={mouseDown} onMouseUp={mouseUp} onMouseLeave={mouseUp} onTouchStart={mouseDown}
    onTouchEnd={mouseUp} disabled={disabled} className={newClassName} {...restProps} style={newStyles}>
        {children}
    </button>
}

export default BasicButton