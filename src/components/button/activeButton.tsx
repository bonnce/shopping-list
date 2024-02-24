import { ButtonHTMLAttributes, useContext } from "react";
import BasicButton from "./basicButton";
import { Theme } from "misc";

export default function ActiveButton(props:ButtonHTMLAttributes<HTMLButtonElement>){
    const {onClick, children, ...restProps} = props
    const {theme} = useContext(Theme)
    const handleClick:React.MouseEventHandler<HTMLButtonElement> = (e)=>{
        const actionButton = e.target as HTMLButtonElement
        actionButton.style.backgroundColor=theme.sixty
        actionButton.style.boxShadow=`inset 4px 4px 4px 0 ${theme.shadow}`
        actionButton.style.color=theme.ten
        onClick?.(e)
    }
    return <BasicButton className="button-card-list" onClick={handleClick} {...restProps}>
        {children}
    </BasicButton>
}