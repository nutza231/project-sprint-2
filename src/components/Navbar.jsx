import React from 'react'

const Navbar = () => {
    return (    
        <div className=' '>
        <div className='flex justify-end pt-0 px-0'> 
            <span>
                Sign in / 
            </span>
            <span>
                Sign up
            </span>
        </div>
            <div className="flex justify-between items-center w-full bg-slate-600 text-white px-4 py-2 ">
                <div className="text-xl font-bold px-2">Milky Tea-Rex</div>
                
                <div className="flex flex-row items-center space-x-4">
                    <div className="rounded-md bg-red-600 px-4 py-1 text-sm">
                        ชาของฉัน
                    </div>

                    <div className="flex items-center space-x-4">
                        <span>Home</span>
                        <span>About</span>
                        <span>Menu</span>
                        <span>Product</span>
                        <span className="flex items-center space-x-3">
                            <span>Cart</span>
                            <img
                                src="https://tse3.mm.bing.net/th?id=OIP.Ww1Niq2gmBPFhF0h1wc4IQHaHa&pid=Api&P=0&h=220"
                                className="w-6 h-6"
                                alt="cart icon"
                            />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar

// https://tse3.mm.bing.net/th?id=OIP.Ww1Niq2gmBPFhF0h1wc4IQHaHa&pid=Api&P=0&h=220
// https://tse2.mm.bing.net/th?id=OIP.36W6g6n6PVVHU4tJDXm43AHaHK&pid=Api&P=0&h=220