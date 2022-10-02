import React from "react";

let colors =[
    '#EEE3CB',
    '#D2DAFF',
    '#FFE3E1',
    '#F9F9F9',
    '#E1FFB1',
    '#FFEDDB'
];

let randomNumber=()=>{
let random = Math.floor(Math.random()*6); 
return random;
}

export default function Body({todos,onDelete}) {
   return(
    <div style={{backgroundColor:colors[randomNumber()]}} className="mx-64 my-5 border-2 border-black "   >
        <div className= "ml-1">
            <h1 className="font-['Alkalami'] text-[1.8em] mt-2">{todos.title}</h1>
            <p className="font-['Exo'] text-[1.3rem] mt-2">{todos.desc}</p>
            <div className="flex justify-center my-5">
            <button className="h-10 w-32 bg-red-500 rounded-md text-white" onClick={()=>{return onDelete(todos)}} >Delete</button>
            </div>
        </div>

    </div>
    );
}
