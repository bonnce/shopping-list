import BaseLink from "./baseLink"

const Navigation = ({handleLinkClick} : {handleLinkClick:VoidFunction}) => {
    return <div className='container column align-start gap-md nav'>
        <BaseLink to='/' onClick={handleLinkClick} >Agregar producto</BaseLink>
        <BaseLink to='/buildList' onClick={handleLinkClick} >Generar lista</BaseLink>
        <BaseLink to='/adminProducts' onClick={handleLinkClick} >Administrar productos</BaseLink>
        <BaseLink to='/buying' onClick={handleLinkClick} >Comprando</BaseLink>
        <BaseLink to='/install' onClick={handleLinkClick}>Guia de instalacion</BaseLink>
    </div>
}

export default Navigation