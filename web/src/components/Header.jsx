import React from 'react';
import { Link } from 'react-router-dom';

function Header({ handleLogout, isAuthenticated }) {
    return (
        <div className="mx-auto w-full px-12 py-4 bg-white/30 backdrop-blur-md flex items-center justify-between shadow-md fixed">
            <img src="../logo.png" alt="Pokemon Logo" className="w-[200px] " />
            <div>
                <nav className="flex items-center gap-4">

                {isAuthenticated ? <button onClick={handleLogout} className="border text-lg text-black p-2 rounded-lg cursor-pointer">Log Out</button> : <Link className="border p-2 rounded-lg text-white text-lg mt-3" to="/sign-in">Log In</Link>}
                </nav>
            </div>
        </div>
    );
};

export default Header;