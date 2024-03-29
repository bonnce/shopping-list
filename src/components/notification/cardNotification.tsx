import { Card } from "components/card";
import { HTMLAttributes, MouseEventHandler, useState } from "react";

const CardNotification = (props:HTMLAttributes<HTMLDivElement>) => {
    const [visible, setVisible] = useState(true)
    const {children, onClick, className, ...restProps} = props
    const handleClick:MouseEventHandler<HTMLDivElement> = (e)=>{
        setVisible(false)
        onClick?.(e)
    }

    return ( <Card className={`notification-card column from-right ${className} ${!visible && 'to-right'}`} onClick={handleClick} 
    {...restProps} style={{transform:visible ? 'translate(150%)':'translate(0%)', boxShadow:"none"}} >
            {children}
    </Card> );
}
 
export default CardNotification;