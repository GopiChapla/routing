import React from "react"

const Hoc =(Comp)=>{

    const Hocrtn=()=>{
            return (
                <div style={{float:'left',margin:'20px'}}>
            <Comp></Comp>
        </div>
            )
        }
    
    return Hocrtn
}

export default Hoc