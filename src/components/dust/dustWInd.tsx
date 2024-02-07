import dustImage from 'assets/images/dust3.png'
import { useEffect, useState } from 'react'

export default function DustWind() {
    const [top, setTop] = useState(50)
    useEffect(()=>{
        const interval = setInterval(()=>{
            setTop(Math.floor(Math.random() * 50))
        },10000)
        return () => clearInterval(interval)
    },[])
    return <img src={dustImage} alt="dust" className="dust-wind" style={{top: `${top}vh`}} />
    
}