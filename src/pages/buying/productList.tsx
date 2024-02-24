import { BasicButton, Icon2x2 } from "components";
import CardList from "components/card/cardList";
import check from 'assets/images/check-outlined.svg'
import cross from 'assets/images/cross-outlined.svg'
import { useId, useState } from "react";
import ActiveButton from "components/button/activeButton";

interface Props{
    product:string
}

export default function ProductList(props:Props){
    const id = useId()
    const [done, setDone] = useState(false)
    const {product} = props

    const handleClick:React.MouseEventHandler<HTMLButtonElement> = (e)=>{
        const product = document.getElementById(id) as HTMLParagraphElement
        if(product){
            product.style.textDecoration = "line-through"
        }
        setDone(true)
    }

    return <CardList className="product-container gap-xsm">
    <p id={id}>{product}</p>
    <div className="container gap-xsm">
        <ActiveButton onClick={handleClick} disabled={done}>
            <Icon2x2 icon={check} alt='check' />
        </ActiveButton>
        <ActiveButton style={{backgroundColor: '#a21904', color:'#fff'}} disabled={done} onClick={handleClick}> 
            <Icon2x2 icon={cross} alt='cross' />
         </ActiveButton>
    </div>
</CardList>
}