import { HTMLAttributes } from "react";
import Card from "./card";

export default function Tooltip(props:HTMLAttributes<HTMLDivElement>){
    const {children} = props
    return <Card className="tooltip" style={{backgroundColor:'#000a'}}>
        {children}
    </Card>
}