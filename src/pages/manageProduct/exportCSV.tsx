import { BasicButton } from "components";
import { iProducts } from "misc";
import { downloadCSV, productsToCSV } from "misc/utils";

export default function ExportCSV({products}: {products:iProducts[] | undefined}){
    const handleClick = ()=>{
        if(products){
            const productsCSV = productsToCSV(products)
            downloadCSV(productsCSV, 'products')
        }
    }
    return <BasicButton className="clear-button" onClick={handleClick}>Export to CSV</BasicButton>
}