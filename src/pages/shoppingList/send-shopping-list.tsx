import { BasicButton, Icon, Icon2x2, InputText } from "components";
import { RequiredProduct } from "misc";
import whatsapp from 'assets/images/whatsapp.svg'
import { ChangeEvent, ChangeEventHandler, useState } from "react";

const SendShoppingList = ({list}:{list:{[key: string]:RequiredProduct[]}})=>{
    const [sendText, setSendText] = useState('')
    const baseWappUrl = 'https://wa.me'
    const stringToSend = Object.entries(list).map(([cat, items]) =>
            [`${cat}\n`, items.map(ele => ele.name)]).toString().replaceAll(/\n,/gi,'\n').replaceAll(/,/gi,', ')

    const handleChange:ChangeEventHandler<HTMLInputElement> = (e) =>{
        setSendText(e.currentTarget.value)
    }

    const handleClick = ()=>{
        const encodeMessage = encodeURI(stringToSend)
        const finalUrl = `${baseWappUrl}/54${sendText}?text=${encodeMessage}`
        window.open(finalUrl)
    }
    return <div className="container column  gap-md ">
        <InputText name='send-text' label="Enviar a:" onChange={handleChange} />
        <BasicButton className="send-button container gap-sm" onClick={handleClick} >Enviar
        <Icon icon={whatsapp} alt="whatsapp" />
        </BasicButton>
    </div>
}

export default SendShoppingList