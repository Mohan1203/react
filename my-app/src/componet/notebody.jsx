import React from "react";
import Body from "./Body";

function renderBody({todoS,onDelete}) {
    return ( <div className="">
        <h1 className="text-center mt-2 text-[2rem]">todos</h1>
        {todoS.map((item,i)=>{
        return (<Body todos={item} key={i} onDelete={onDelete} />);
              
        })}
    </div> 
    );
}

export default renderBody;