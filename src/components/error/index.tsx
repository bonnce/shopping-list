import { HTMLAttributes } from "react";

const Error = (props:HTMLAttributes<HTMLElement>) => {
    const {className, ...restProps} = props
    const newClassName = `error-text ${className}`
    return ( <p className={newClassName} {...restProps} /> );
}
 
export default Error;