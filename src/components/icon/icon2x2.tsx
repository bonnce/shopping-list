import Icon from './icon'

const Icon2x2 = ({icon,alt, description, handleClick}:{icon:string, alt:string, description?:string, handleClick?:VoidFunction})=>
    <Icon className='icon-2x2' onClick={handleClick} icon={icon} alt={alt} description={description}/>

export default Icon2x2