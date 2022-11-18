import { ReactNode } from "react";

const BlackBar = ({children, start}:{children:ReactNode, start:boolean})=><div className={`container gap-md shopping-blackBars growUp ${start && 'decrease'}`}>
{children}
</div>

export default BlackBar