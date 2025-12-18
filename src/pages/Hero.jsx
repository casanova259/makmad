import React from 'react'
import NavBar from '../Components/NavBar';
import Card from '../Components/Card';
function Hero() {
    return (
        <>
            <NavBar />
            <div className=" container flex items-center justify-between px-10">

                <Card/>

                {/* right side */}
                <div className='profile h-64 w-80'>
                    <img src="../public/images/Me.jpg" alt="" />
                </div>
            </div>
        </>

    );
}

export default Hero