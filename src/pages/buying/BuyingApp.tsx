import { Card, InputButton } from "components"
import { textParserToObj } from "misc/utils"
import { useState } from "react"
import ProductList from "./productList"

export default function BuyingApp(){
    const [categoryWithProducts, setProductList] = useState<{[key: string]:string[]} | undefined>(undefined)
    const handleClick = ()=>{
        const textarea = document.querySelector('textarea[name="productList"]') as HTMLTextAreaElement
        if(textarea){
            const valueParsed = textParserToObj(textarea.value)
            setProductList(valueParsed)
        }
    }
    const PLACEHOLDER = "Ingrese aqui su lista de productos:\n{Category}\nProduct 1\nProduct 2\n..."

    return categoryWithProducts && Object.keys(categoryWithProducts).length > 0 ?
    <ul className="container column gap-sm container-list">
        {Object.entries(categoryWithProducts).map(([category, productList]) =>
        <li className="fullWidth" key={category}>
            <h3 className="list-title">{category}</h3>
            <ul>
                {productList.map((product, i) => 
                    <ProductList product={product} key={product+i} />
                    )}
            </ul>
        </li>
        )}
    </ul> :
    <Card className='card-form'>
        <div className="container column gap-md border-box">
        <h2 className="form-title">Lista de productos</h2>
        <textarea className="fullWidth input-text" name="productList" id="productList" rows={10} placeholder={PLACEHOLDER} />
        <InputButton value="Confirmar" className="fullWidth" onClick={handleClick} />
        </div>
    </Card>
}