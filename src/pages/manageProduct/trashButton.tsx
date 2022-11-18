import { Icon } from "components";
import trash from 'assets/images/redTrash.svg'

export const TrashButton = ({onClick}:{onClick?:VoidFunction}) => <div className="container col-5x5 fullWidth justify-end align-end">
    <Icon onClick={onClick} className="icon-3x3" alt="trash" icon={trash} />
</div>