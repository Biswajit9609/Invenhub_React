import React, { useState } from "react";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav className="bg-blue-950 text-white p-3 md:mx-15 md:mt-5 flex md:rounded-lg font-semibold border-b-2 border-[#030348]">
                <div className="w-11/12 md:w-6/12">InvenHub</div>
                <div className="flex md:gap-10 md:ml-auto">
                    <div className="hidden md:block hover:text-red-500 hover:underline">
                        <a href="">About Us</a>
                    </div>
                    <div className="hidden md:block hover:text-red-500 hover:underline">
                        <a href="">Sign-Up</a>
                    </div>
                    <div className="hidden md:block hover:text-red-500 hover:underline">
                        <a href="">Login</a>
                    </div>
                    <button
                        className="hover:cursor-pointer md:hidden fixed"
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512"
                                className="w-5"
                            >
                                <path
                                    fill="#ffffff"
                                    d="M320.7 320.7c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L192 282.3l-83.3 83.3c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L146.8 237l-83.3-83.3c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 191.8l83.3-83.3c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L237.3 237l83.3 83.3z"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                className="w-5"
                            >
                                <path
                                    fill="#ffffff"
                                    d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </nav>
            <div className="h-20">
                <ul className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-blue-950 text-white`}>
                    <li className="border-b-2 border-[#030348] px-5 py-2 hover:text-red-500"><h1>About Us</h1></li>
                    <li className="border-b-2 border-[#030348] px-5 py-2 hover:text-red-500"><h1>Register</h1></li>
                    <li className="border-b-2 border-[#030348] px-5 py-2 hover:text-red-500"><h1>Login</h1></li>
                </ul>
            </div>
        </>
    );
}

export default Navbar;
