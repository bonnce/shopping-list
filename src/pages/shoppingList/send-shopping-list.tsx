import { BasicButton, Icon, Icon2x2, InputText, ThemedIcon2x2 } from "components";
import { RequiredProduct } from "misc";
import { ChangeEventHandler, MouseEventHandler, useState } from "react";
import whatsapp from 'assets/images/whatsapp.svg'
import copy from 'assets/images/copy.svg'
import search from 'assets/images/search.svg'
import { getContacts, getRawPhone } from "misc/utils";
import { ContactSelected } from "misc/types";

const SendShoppingList = ({ list }: { list: { [key: string]: RequiredProduct[] } }) => {
    const [sendText, setSendText] = useState('')
    const [contact, setContact] = useState<ContactSelected>()
    const [errorContact, setErrorContact] = useState<string>()
    const baseWappUrl = 'https://wa.me'
    const stringToSend = Object.entries(list).map(([cat, items]) =>
        [`{ *${cat.toUpperCase()}* }\n`, items.map(ele => ele.name)]).toString().replaceAll(/\n,|,/g, '\n')
    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setSendText(e.currentTarget.value)
    }
    const handleCopy: MouseEventHandler = async () => {
        try {
            await navigator.clipboard.writeText(stringToSend);
        } catch (err) {
            console.error("Error al copiar el texto: ", err);
        }
    }
    const handleClick = () => {
        const encodeMessage = encodeURIComponent(stringToSend)
        const finalUrl = `${baseWappUrl}/54${sendText}?text=${encodeMessage}`
        window.open(finalUrl)
    }

    const handleContact = async () => {
        const contactResult = await getContacts()
        if (Array.isArray(contactResult)) {
            setContact(contactResult[0])
            const phone = contactResult && getRawPhone(contactResult[0].tel?.[0] || '')
            setSendText(phone || '')
        }
        else
            setErrorContact(contactResult)
    }

    return <div className="container column  gap-md ">
        <div className="container gap-sm align-end contact-container">
            <InputText name='send-text' label={`Enviar a ${contact && contact.name ? contact.name[0] : '(telefono)'} :`}
                onChange={handleChange} defaultValue={contact && getRawPhone(contact.tel?.[0] || '')} />
            <BasicButton className="search-button" onClick={handleContact} ><Icon2x2 icon={search} alt="search" /></BasicButton>
        </div>
        {errorContact && <p className="error-text">{errorContact}</p>}
        <div className="container gap-sm align-stretch contact-container">
            <BasicButton className="send-button container gap-sm" onClick={handleClick} >Enviar
                <Icon icon={whatsapp} alt="whatsapp" />
            </BasicButton>
            <BasicButton themeColor="sixty" className="copy-button relative" onClick={handleCopy}> 
                <ThemedIcon2x2 icon={copy} description="copiar" alt="copy" />
            </BasicButton>
        </div>
    </div>
}

export default SendShoppingList