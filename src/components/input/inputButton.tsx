import { Theme } from "misc"
import { InputHTMLAttributes, useContext, useRef } from "react"

const InputButton = (props: InputHTMLAttributes<HTMLInputElement>) => {
    const {className, ...restProps} = props
    const {theme} = useContext(Theme)
    const buttonRef = useRef<HTMLInputElement>(null);
    const newClassName = `input-button ${className}`
    const mouseDown = ()=>{
        if(buttonRef.current) {
            buttonRef.current.style.backgroundColor=theme.sixty
            buttonRef.current.style.color=theme.ten
            buttonRef.current.style.boxShadow=`inset 0px 4px 4px 0 ${theme.shadow}`
        }
    }
    const mouseUp = ()=>{
        if(buttonRef.current){
            buttonRef.current.style.color=theme.sixty
            buttonRef.current.style.backgroundColor=theme.ten
            buttonRef.current.style.boxShadow= `0px 4px 4px 0 ${theme.shadow}`
        }
    }

    return <input ref={buttonRef} className={newClassName} {...restProps} 
    onMouseDown={mouseDown} onMouseUp={mouseUp} onMouseLeave={mouseUp} onTouchStart={mouseDown} onTouchEnd={mouseUp}
    style={{backgroundColor:theme.ten,color:theme.sixty, boxShadow: `0px 4px 4px 0 ${theme.shadow}`}} />
}


export default InputButton