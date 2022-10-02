import React from "react";

function Footer() {
    return ( 
        <div>
            <footer className=" bg-gray-600 h-8 relative top-[50vh] self-end">
                <p className="text-center">© 2010-{new Date().getFullYear()} Nebula software all right reserved</p>
            </footer>
        </div>
     );
}

export default Footer;