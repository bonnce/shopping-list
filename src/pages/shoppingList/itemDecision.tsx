import { Icon } from "components"
import { RequiredProduct, timeout } from "misc"
import { useState } from "react"
import BlackBar from "./blackBar"
import CurrentItem from "./currentItem"
import check from 'assets/images/check-outlined.svg'
import cross from 'assets/images/cross-outlined.svg'

const ItemDecision = ({start, item, handleSkip, handleSuccess}: {start:boolean, item:RequiredProduct, handleSkip:(callback:(param:0|1|-1|2)=>void)=>void,
handleSuccess:VoidFunction})=> {
    const [success, setSuccess] = useState<0|1|-1|2>(0)
    const handleAccept = async ()=>{
        setSuccess(1)
        handleSuccess()
        await timeout(300)
        handleSkip((v)=>{setSuccess(v)})        
    }

    const handleReject = async ()=>{
        setSuccess(-1)
        await timeout(300)
        handleSkip((v)=>{setSuccess(v)})

    }
    
    return <div className="container column fullWidth shopping-container">
<BlackBar start={start}>
<h2>{item.category}</h2>
</BlackBar>
{success === 2 || <CurrentItem item={item.name} success={success}  />}
<BlackBar start={start}>
    <button className="confirm-button green" onClick={handleAccept}>
        <Icon icon={check} alt='check' className="confirm-icon" />
    </button>
    <button className="confirm-button red" onClick={handleReject}>
        <Icon icon={cross} alt='cross' className="confirm-icon" />
    </button>
</BlackBar>
</div>
}

export default ItemDecision