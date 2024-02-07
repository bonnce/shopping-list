import { Theme } from "misc";
import { InputHTMLAttributes, ReactNode, useContext, useId, useRef } from "react";

interface iFileInput extends InputHTMLAttributes<HTMLInputElement>{
    children : ReactNode
}

const InputFile = (props: iFileInput) => {
    const {className, children, ...restProps} = props
    const newClassName = `input-button ${className}`
    const id = useId()
    const {theme} = useContext(Theme)
    const buttonRef = useRef<HTMLLabelElement>(null);

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
            buttonRef.current.style.boxShadow= `0 2px 5px 2px ${theme.thirty}, 0 5px 8px 0px ${theme.ten}55`
        }
    }

    return ( 
    <label ref={buttonRef} htmlFor={id} className={newClassName}
    onMouseDown={mouseDown} onMouseUp={mouseUp} onMouseLeave={mouseUp} onTouchStart={mouseDown} onTouchEnd={mouseUp}
    style={{backgroundColor:theme.ten,color:theme.sixty, boxShadow: `0 2px 5px 2px ${theme.thirty}, 0 5px 8px 0px ${theme.ten}55`}}>
        {children}
        <input type="file" id={id} {...restProps}/>
    </label>
    )
}
 
export default InputFile;