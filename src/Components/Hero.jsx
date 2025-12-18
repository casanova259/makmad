import React from 'react'

function Hero() {
    return (
        <>
        <div className=" flex items-center justify-between px-10">

                <h1 className='text-black'>I M Manik Sharma</h1>

                {/* right side */}
                <div className='profile h-64 w-80'>
                    <img src="../public/images/Me.jpg" alt="" />
                </div>
        </div>
        </>
        
    );
}

export default Hero