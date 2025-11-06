import type { ReactNode } from "react" 
import "./Campo.css"


interface CampoProps {
    children?: ReactNode;
}

export default function ({children}: CampoProps) {
    return (
        <div className="campo">
            {children}
        </div>
    )
}