import { themes,Theme, Database,DeferredPrompt } from './context'
import { createDB, get, getAll, save, remove, update } from './dbcontrol'
import { handleMenu, handleTotal, leftRate, timeout} from './utils'
import { NAMECOLLECTION, INDEXCOLLECTION, NAMEDB } from './const'
import { iProducts, iShoppingDB, iScore, BeforeInstallPromptEvent, inputType, iInputForm } from './types'
import { useWindowDimensions, useDeferredPrompt } from './hooks'

export{
    handleMenu,
    handleTotal,
    leftRate,
    createDB,
    get,
    getAll,
    save,
    remove,
    update,
    useWindowDimensions,
    useDeferredPrompt,
    timeout,
    themes,
    Theme,
    DeferredPrompt,
    Database,
    NAMECOLLECTION,
    INDEXCOLLECTION,
    NAMEDB
}
export type{
    iProducts,
    iShoppingDB,
    iScore,
    BeforeInstallPromptEvent,
    inputType,
    iInputForm
}