import { Theme } from "misc";
import { useContext } from "react";
import { Link, LinkProps } from "react-router-dom";

const BaseLink = (props:LinkProps) => {
    const {theme} = useContext(Theme)
    const {children,className, ...restProps} = props
    const newClassName = `nav-link ${className || ''}`
    return <Link {...restProps} className={newClassName} style={{color:theme.text}}>{children}</Link>
}
export default BaseLink