import { timeout } from "misc";
import { MouseEventHandler, useState } from "react";
import CardNotification from "./cardNotification";

interface iNotifContainer {
    validDataSaved:string[]
}

const NotificationContainer = (props:iNotifContainer) => {
    const {validDataSaved} = props
    const [cards, setCards] = useState<string[]>(validDataSaved)
    const dataLength = validDataSaved.length

    const handleClick:MouseEventHandler<HTMLDivElement> = async (e)=>{
        const target = e.currentTarget.innerText
        await timeout(300)
        setCards(cards.filter(card => card !== target))
    }

    return (
<div className="notification-card-container">

{cards.map((validData, i) =>
<CardNotification key={validData} onClick={handleClick}>
    <p className="success-text">{validData}</p> 
    <p className="notif-length">{`Guardado - ${i+1}/${dataLength}`}</p> 
</CardNotification>
)}
</div>
    )
}
 
export default NotificationContainer;