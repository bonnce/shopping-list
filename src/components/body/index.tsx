import React from "react";

const Body = ({children, noGapHeaderBody}:{children:React.ReactNode, noGapHeaderBody?:boolean})=><div className="container align-start body" 
style={{padding:noGapHeaderBody ? '' : '3em'}}>
    {children}
</div>

export default Body