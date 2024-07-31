import { Theme } from 'misc'
import { useContext } from 'react'
import Icon from './icon'

const ThemedIcon2x2 = ({icon,alt, description, invert, handleClick}:{icon:string, alt:string, invert?: boolean, description?: string, handleClick?:VoidFunction})=>{
const {theme} = useContext(Theme)
const inverted = invert? Math.abs(Number(theme.invert) - 1): theme.invert
    return <Icon className='icon-2x2' onClick={handleClick} icon={icon} alt={alt} description={description} style={{filter:`invert(${inverted})`}} />   
}

export default ThemedIcon2x2