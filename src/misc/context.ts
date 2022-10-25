import { IDBPDatabase } from 'idb'
import React from 'react'
import { BeforeInstallPromptEvent, iShoppingDB } from './types'

const themes = {
    light:{
        'sixty' : "#F5FFF5",
        'thirty' : "#AAEEBB",
        'ten' : "#225533",
        'text' : "#000000",
        'shadow' : "#0003",
        'invert' : "0",
    },
    dark:{
        'sixty' : "#333333",
        'thirty' : "#335544",
        'ten' : "#87E5A3",
        'text' : "#FFFFFF",
        'shadow' : "#0007",
        'invert' : "1",
    }
}

const DeferredPrompt = React.createContext<{deferredPrompt:BeforeInstallPromptEvent | null,
                                            setDeferredPrompt:React.Dispatch<React.SetStateAction<BeforeInstallPromptEvent | null>>}>({deferredPrompt:null, setDeferredPrompt:()=>{}})
const Theme = React.createContext({theme:themes.light,setTheme:()=>{}})
const Database = React.createContext<IDBPDatabase<iShoppingDB>|null>(null)

export{
    themes,
    Theme,
    Database,
    DeferredPrompt
}