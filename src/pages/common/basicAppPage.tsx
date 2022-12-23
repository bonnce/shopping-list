import { Body, Header } from "components";
import React from "react";
import { useContext } from "react";
import { Theme } from "misc";

const BasicAppPage = ({title,children, noGapHeaderBody}:{title:string,children:React.ReactNode, noGapHeaderBody?:boolean})=>{
const {theme} = useContext(Theme)
return <div style={{backgroundColor:theme.sixty, color:theme.text}} className='container column app'>
            <Header title={title}/>
            <Body noGapHeaderBody={noGapHeaderBody} >
                {children}
            </Body>
            </div>
}

export default BasicAppPage