import { DBSchema } from "idb";

//types
type inputType = "name" | "frequency" | "category"


interface iProducts {
    id?:number;
    name:string;
    frequency:number;
    category:string;
}

type RequiredProduct = Required<iProducts>

interface iInputForm{
    name:inputType,
    label:string
}

//Schema
interface iShoppingDB extends DBSchema{
    products: {
        value: iProducts;
        key: number;
        indexes: { category: string };
    };
}


// install prompt
interface BeforeInstallPromptEvent extends Event {
    readonly platforms: string[];
    readonly userChoice: Promise<{
      outcome: "accepted" | "dismissed";
      platform: string;
    }>;
    prompt(): Promise<void>;
}

interface NavigatorContacts{
    readonly contacts : ContactsManager
}

interface ContactSelected {
    email?:string[];
    name?:string[];
    tel?:string[];
    icon?:string[];
}
  
interface ContactsManager {
getProperties() : Promise<string[]>;
select(properties:string[], options?:{multiple:boolean}) : Promise<ContactSelected[]>;
};


declare global {
    interface WindowEventMap {
        beforeinstallprompt: BeforeInstallPromptEvent;
    }
    interface Navigator extends NavigatorContacts{}
}

export {
    iShoppingDB,
    iProducts,
    BeforeInstallPromptEvent,
    inputType,
    iInputForm,
    RequiredProduct,
    ContactSelected
}