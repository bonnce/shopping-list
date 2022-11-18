import BasicAppPage from "pages/common/basicAppPage";
import BuildList from "./buildList";

const ShoppingList = ()=><BasicAppPage title='Generar Lista de Compras' noGapHeaderBody>
    <BuildList />
</BasicAppPage>

export default ShoppingList