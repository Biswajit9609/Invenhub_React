import React from "react";

function Navbar(){
    return (
        <>
            <nav className='bg-blue-950 text-white p-3 md:mx-15 md:mt-5 flex md:rounded-lg font-bold'>
                <div className='w-11/12 md:w-6/12'>InvenHub</div>
                <div className='flex md:gap-10 md:ml-auto'>
                    <div className='hidden md:block hover:text-red-500 hover:underline'><a href="">About Us</a></div>
                    <div className='hidden md:block hover:text-red-500 hover:underline'><a href="">Sign-Up</a></div>
                    <div className='hidden md:block hover:text-red-500 hover:underline'><a href="">Login</a></div>
                    <button className="hover:cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='w-5 md:hidden'><path fill="#ffffff" d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg></button>
                </div>
            </nav>
        </>
    )
}

export default Navbar