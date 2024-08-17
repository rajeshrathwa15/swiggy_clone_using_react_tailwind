import React, { useState } from 'react'
import { RxCaretDown } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { PiToolboxLight } from "react-icons/pi";
import { BiSolidOffer } from "react-icons/bi";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { MdOutlineAssignmentInd } from "react-icons/md";
import { PiShoppingCartFill } from "react-icons/pi";
import { FaMapMarkerAlt } from 'react-icons/fa';

const Header = () => {
    const [toggle, setToggle] = useState(false);

    const showSideMenu = () => {
        setToggle(true);
    }

    const hideSideMenu = () => {
        setToggle(false);
    }

    const links = [
        {
            icon: <PiToolboxLight size={24} />, // Adjust icon size here
            name: "Swiggy Corporate"
        },
        {
            icon: <IoIosSearch size={24} />, // Adjust icon size here
            name: "Search"
        },
        {
            icon: <BiSolidOffer size={24} />, // Adjust icon size here
            name: "Offers",
            sup: "NEW"
        },
        {
            icon: <IoHelpBuoyOutline size={24} />, // Adjust icon size here
            name: "Help"
        },
        {
            icon: <MdOutlineAssignmentInd size={24} />, // Adjust icon size here
            name: "Sign in"
        },
        {
            icon: <PiShoppingCartFill size={24} />, // Adjust icon size here
            name: "Cart"
        }
    ]

    const getCurrentLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    console.log('Latitude:', position.coords.latitude);
                    console.log('Longitude:', position.coords.longitude);
                },
                (error) => {
                    console.error('Error getting location:', error);
                }
            );
        } else {
            alert('Geolocation is not supported by this browser.');
        }
    };

    return (
        <>
            <div
                className="black-overlay w-full h-full fixed duration-500"
                onClick={hideSideMenu}
                style={{
                    opacity: toggle ? 1 : 0,
                    visibility: toggle ? "visible" : "hidden",
                    zIndex: 9999999999
                }}
            >
                {/* Side menu */}
                <div
                    className='w-[500px] bg-white h-full absolute duration-[400ms]'
                    onClick={(e) => e.stopPropagation()}
                    style={{
                        left: toggle ? "0%" : "-100%",
                        visibility: toggle ? "visible" : "hidden"
                    }}
                >
                    {/* Close icon */}
                    <div className='absolute top-2 left-2 cursor-pointer'>
                        <span
                            className='text-gray-500 hover:text-gray-800'
                            onClick={hideSideMenu} // Ensure this function hides the side menu
                            style={{ fontSize: '24px' }} // Increase close icon size
                        >
                            &times;
                        </span>
                    </div>

                    {/* Input field */}
                    <div className='p-4 mt-12'> {/* Add margin-top to create space */}
                        <input
                            className='w-full border border-gray-300 rounded p-2'
                            type='text'
                            placeholder='Search for area, street name..'
                        />
                    </div>

                    {/* Get current location */}
                    <div className='p-4 ml-4 flex  items-center justify-center border border-gray-300 w-[470px]'>
    <button
        className='flex items-center gap-2  p-2 rounded w-full max-w-[500px] justify-center'
        onClick={getCurrentLocation} // Ensure this function handles getting the location
    >
        <FaMapMarkerAlt size={24} /> {/* Adjust icon size here */}
       <span className='hover:text-red-600 font-semibold'>Get current location</span> 
    </button>
</div>


                </div>
            </div>

            <header className='p-[15px] shadow-xl text-[#686b78] sticky top-0 bg-white z-[9999]'>
                <div className='max-w-[1200px] mx-auto flex items-center'>
                    <div className='w-[100px]'>
                        <img src="images/logo.png" alt="" className='w-full' />
                    </div>
                    <div className='flex items-center'>
                        <span className='font-bold border-b-[3px] border-[black]'>Ratanada</span>  
                        <span className='ml-2'>Jodhpur, Rajasthan, India</span> 
                        <RxCaretDown onClick={showSideMenu} fontSize={25} className='inline text-[#fc8019] cursor-pointer' />
                    </div>
                    <nav className='hidden md:flex list-none gap-10 ml-auto font-semibold text-[18px]'>
                        {
                            links.map(
                                (link, index) => {
                                    return (
                                        <li key={index} className='flex hover:text-[#fc8019] items-center gap-2 cursor-pointer'>
                                            {link.icon}
                                            {link.name}
                                            {
                                               link.sup && <span className='text-[#ff0000] font-bold'> <sup>{link.sup}</sup></span>
                                            }
                                        </li>
                                    )
                                }
                            )
                        }
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header
