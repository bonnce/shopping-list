import { Theme } from "misc"
import { useContext } from "react"

const CurrentItem = ({item, success}:{item:string, success:-1|0|1|2})=>{
    const {theme} = useContext(Theme)
return <div className={`container fullWidth current-item ${!success ? 'from-right fade-in' : success === -1 ? 'vanish' : 'to-left'}`}>
    <h3 style={{color:theme.text}}>{item}</h3>
</div>
}
export default CurrentItem