import { Theme } from "misc"
import { useContext } from "react"

const Footer = ()=> {
    const {theme} = useContext(Theme)
return <footer className="container footer gap-md" style={{backgroundColor:theme.thirty,
    color:theme.text,
boxShadow: `0 -4px 4px 0 ${theme.shadow}`}}>
<p style={{color:theme.text}}>Copyright David 2022</p>
</footer>}

export default Footer