import { Theme } from 'misc'
import { useContext } from 'react'
import Navigation from './navigation'
import cross from 'assets/images/cross.svg'
import {ThemedIcon2x2} from 'components'


const Menu = ({open, handleMenu}:{open:boolean, handleMenu:VoidFunction})=>{
    const {theme} = useContext(Theme)
    return <div>
        <div className='background-menu' style={{opacity:Number(open), pointerEvents:open ? 'fill': 'none'}} 
        onClick={handleMenu} />
        <div className='container column align-start gap-md menu' 
        style={{backgroundColor:theme.sixty, boxShadow: `4px 0px 4px 0 ${theme.shadow}`, left: open ? '0' : '-36em'}}>
            <div className='container gap-md align-start'>
                <ThemedIcon2x2 icon={cross} alt='cross' handleClick={handleMenu}/>
                <h2 className='menu-title'>shopping list</h2>
            </div>
            <Navigation handleLinkClick={handleMenu} />
        </div>
    </div>
}

export default Menu