import React from 'react'

function NavBar() {
    return (
        <>
            <div className="min-w-screen absolute top-0 bg-gray-100 ">
                <nav className="px-6 py-6 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-yellow-400 rounded-full"></div>
                        <span className="font-semibold text-black text-lg">MAK</span>
                    </div>
                    <div className="flex gap-8 text-sm">
                        <a href="#" className="text-black font-medium">Home</a>
                        <a href="#" className="no-underline text-gray-600 hover:text-gray-900">About</a>
                        <a href="#" className="text-gray-600 hover:text-gray-900">Works</a>
                        <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
                    </div>
                </nav>
            </div>
        </>
    )
}
export default NavBar