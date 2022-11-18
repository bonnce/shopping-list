import { IDBPDatabase } from "idb"
import { themes, Theme, createDB, Database, NAMEDB, useDeferredPrompt, DeferredPrompt} from "misc"
import { iShoppingDB } from "misc/types"
import { InstallAppPage, CreateProduct, ShoppingList, ProductManager } from "pages"
import { useEffect, useState } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

const App = ()=>{
    const [theme,setTheme] = useState(themes.light)
    const [db,setDB] = useState<IDBPDatabase<iShoppingDB>|null>(null)
    
    const handleDB = async ()=>{
        const db = await createDB(NAMEDB)
        setDB(db)
    }

    const handleTheme = ()=>{
        setTheme(t => t===themes.dark ? themes.light : themes.dark)
    }
    const [deferredPrompt,setDeferredPrompt] = useDeferredPrompt()

    useEffect(()=>{
        handleDB()
    },[])

    return <Theme.Provider value={{theme,setTheme:handleTheme}}>
        <Database.Provider value={db}>
        <DeferredPrompt.Provider value={{deferredPrompt,setDeferredPrompt}}>

            <Router basename="/shopping-list">
                <Routes>
                    <>
                    <Route index element={<CreateProduct/>} />                
                    <Route path='/buildList' element={<ShoppingList/>} />
                    <Route path='/adminProducts' element={<ProductManager/>} />
                    <Route path='/install' element={<InstallAppPage/>} />
                    </>
                </Routes>
            </Router>
            </DeferredPrompt.Provider>
        </Database.Provider>
    </Theme.Provider>
}

export default App