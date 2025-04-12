import React from 'react';

function Header() {
    return (
        <div className="mx-auto w-full px-12 py-4 bg-white/30 backdrop-blur-md flex items-center justify-between shadow-md fixed">
            <img src="../logo.png" alt="Pokemon Logo" className="w-[200px] " />
            <h1 className="text-md text-white">Link</h1>
        </div>
    );
};

export default Header;