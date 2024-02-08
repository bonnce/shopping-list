import { BasicButton } from "components";
import { IDBPDatabase } from "idb"
import { NAMECOLLECTION, iShoppingDB } from "misc";
import { clear } from "misc/dbcontrol";

export default function ClearDatabase({db, onClear}:{db:null | IDBPDatabase<iShoppingDB>, onClear:VoidFunction}){
    const handleClick = ()=>{
        if(db){ 
            clear(db, NAMECOLLECTION)
            onClear()
        }
    }
    return <BasicButton className="clear-button" style={{backgroundColor:"#a21904", color:"#fff"}} onClick={handleClick}>Clear All Data</BasicButton>
}