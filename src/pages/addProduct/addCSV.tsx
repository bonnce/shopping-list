import { LoadingIcon } from "components";
import Tooltip from "components/card/tooltip";
import Error from "components/error";
import InputFile from "components/input/inputFile";
import NotificationContainer from "components/notification/cardContainerNotf";
import { Database, iProducts, save } from "misc";
import { NAMECOLLECTION, PRODUCTSTYPE } from "misc/const";
import { filterCSV, validateData } from "misc/utils";
import { ChangeEventHandler, useContext, useState } from "react";

const AddCSV = () => {
    const db = useContext(Database)
    const [validDataSaved, setValidDataSaved] = useState<string[]>()
    const [errorUpload, setErrorUpload] = useState<string>()
    const [loading, setLoading] = useState<boolean>(false)

    const handleFile:ChangeEventHandler<HTMLInputElement> = async (e)=>{
        setLoading(true)
        const file = e.target.files?.[0]
        const csvExtension = file?.name.match(/\.csv$/)
        if(file && (file.type === 'text/csv' || file.type === 'text/comma-separated-values' || csvExtension)){

            const fileStr = await file.text()
            const filteredStr = filterCSV(fileStr, 2)
            const validData = validateData(PRODUCTSTYPE, filteredStr)
            if(validData?.length > 0 && db){

                const dataSaved = await Promise.all(validData.map(async data => {
                    const product:iProducts = {
                        name:data[0].toString(),
                        frequency:Number(data[1]),
                        category:data[2].toString()
                    }
                    const result = await save(db,NAMECOLLECTION,product)
                    if(result)
                    return product.name

                }))
                setValidDataSaved(dataSaved.filter(i => i != null) as string[])
                setErrorUpload(undefined)
                setLoading(false)
            }
            else {
                setErrorUpload('El archivo contiene datos invalidos')
                setLoading(false)
            }
        }else{
            setErrorUpload('El archivo tiene que ser formato csv')
            setLoading(false)
        }
    }

    return ( 
    <div className="container column gap-sm">
        <InputFile onChange={handleFile} className="relative tooltip-container">
            <Tooltip>
                CSV ejemplo:
                <br />
                Nombre,Prioridad,Categoria
            </Tooltip>
            {(loading && <LoadingIcon />) || 'Cargar CSV'}
        </InputFile>
        {errorUpload && <Error>
            {errorUpload}
        </Error>}
        {validDataSaved && <NotificationContainer validDataSaved={validDataSaved} />}
    </div>
     );
}
 
export default AddCSV;