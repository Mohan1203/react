import React from "react";

function Header() {
    return ( <div className="bg-slate-400 h-16 pt-4 ">
        <div>
            <ul className="flex text-[1.2rem]">
                <a href=""><li className="mx-5">Home</li></a>
                <a href=""><li className="mx-5">About</li></a>
            </ul>
        </div>
    </div> );
}

export default Header;