import React, { Children, useContext, useState } from "react"
import { Theme } from "misc"

const Collapse = ({title, children} : {title:string, children:React.ReactNode})=>{
    const GAP = 2
    const PADDING = 1.25
    const FONTSIZE = 5.5
    const [open, setOpen] = useState(false)
    const childrenLength = Children.toArray(children).length
    const {theme} = useContext(Theme)
    const handleClick = ()=>{
        setOpen(o => !o)
    }
    return <div className="container column align-start collapse">
        <div className="container collapse-title fullWidth" onClick={handleClick} style={{ backgroundColor: theme.thirty }}>
            <h2>{title}</h2>
        </div>
        <div className={`container column align-start gap-sm content-collapsed ${open ? 'collapsed-open fade-in' : 'collapsed-close fade-out'}`}
        style={{backgroundColor:theme.sixty,padding:open? `${PADDING}em` : 0, boxShadow: `inset 0px -2px 4px ${theme.shadow}`,
        maxHeight: open ? `${childrenLength*(FONTSIZE + GAP) + PADDING}em` : "0"}}>
            {children}
        </div>
    </div>
}

export default Collapse