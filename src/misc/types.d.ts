import { DBSchema } from "idb";

//types
type inputType = "name" | "frequency" | "category"

interface iScore {
    label:string,
    total:number
}

interface iProducts {
    id?:number;
    name:string;
    frequency:number;
    category:string;
}

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

declare global {
    interface WindowEventMap {
        beforeinstallprompt: BeforeInstallPromptEvent;
    }
}

export {
    iShoppingDB,
    iScore,
    iProducts,
    BeforeInstallPromptEvent,
    inputType,
    iInputForm
}