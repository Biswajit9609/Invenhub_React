import React from "react"
function Navbar(){
    return (
        <>
            <div className="bg-blur text-center align-middle mx-[30vw] my-7 h-12 rounded-xl flex px-2 py-2 justify-around font-sans">
                <h1 className="text-[1.2rem] mr-30"><a href="">InvenHub</a></h1>
                <h1 className="text-[1.2rem]"><a href="">Feature</a></h1>
                <h1 className="text-[1.2rem]"><a href="">Pricing</a></h1>
                <h1 className="text-[1.2rem]"><a href="">Contact</a></h1>
                <h1 className="text-[1.2rem] static right-0"><a href="">Login</a></h1>
            </div>
        </>
    )
}
export default Navbar