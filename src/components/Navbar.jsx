import React, { useState, useEffect } from 'react';
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { MdCloseFullscreen } from "react-icons/md";
import { Link } from "react-scroll";
import pic from "../../public/my photo.jpeg";

function Navbar() {
    const [menu, setMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const navItems = [
        { id: 1, name: "Home" },
        { id: 2, name: "About" },
        { id: 3, name: "Portfolio" },
        { id: 4, name: "Contact" },
        { id: 5, name: "Experience" }
    ];

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? 'shadow-scroll' : ''}`}>
            <div className='flex justify-between items-center h-16'>
                <div className='flex items-center space-x-2'>
                    <img 
                        src={pic} 
                        className='h-12 w-12 rounded-full object-cover' 
                        alt="Manish M26" 
                    />
                    <div className='flex flex-col'>
                        <h1 className='font-semibold text-xl cursor-pointer'>
                            Manish<span className='text-green-500'>M26</span>
                        </h1>
                        <p className='text-green-500 text-sm'>Web Developer</p>
                    </div>
                </div>

                {/* Desktop Navbar */}
                <div>
                    <ul className='hidden md:flex space-x-8'>
                        {navItems.map(({ id, name }) => (
                            <li className="hover:shadow-lg transition-shadow duration-300 cursor-pointer" key={id}>
                                <Link 
                                    to={name}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    activeClass="active"
                                >
                                    {name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div onClick={() => setMenu(!menu)} className="md:hidden">
                        {menu ? <AiOutlineMenuUnfold size={24} /> : <MdCloseFullscreen size={24} />}
                    </div>
                </div>
            </div>

            {/* Mobile Navbar */}
            {menu && (
                <div className='bg-white'>
                    <ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-4 font-bold'>
                        {navItems.map(({ id, name }) => (
                            <li key={id}>
                                <Link 
                                    onClick={() => setMenu(!menu)}
                                    to={name}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    activeClass="active"
                                >
                                    {name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Navbar;
