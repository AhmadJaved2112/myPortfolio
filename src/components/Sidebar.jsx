import { useState, useEffect } from 'react';
import { FaArrowDown, FaRegEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { Personal } from '../utils/Constrains.jsx'
import { SlCalender } from 'react-icons/sl';

const Sidebar = () => {
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [isLargeScreen, setIsLargeScreen] = useState(false);


    useEffect(() => {
        const checkScreenSize = () => {

            setIsLargeScreen(window.innerWidth >= 1024);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);


    const toggleContactSection = () => {
        setIsContactOpen(!isContactOpen);
    };

    return (
        <div className='bg-[#fcf1e5] h-fit rounded-lg p-6 relative overflow-hidden lg:sticky lg:top-6'>


            {!isLargeScreen && (
                <button
                    onClick={toggleContactSection}
                    className={`bg-red-600 w-6 h-6 absolute top-0 left-0 flex items-center justify-center rounded-br-lg rounded-tl-lg cursor-pointer transition-transform duration-500 ${isContactOpen ? 'rotate-180' : ''}`}
                >
                    <FaArrowDown className='text-white' />
                </button>
            )}

            {/* Profile Setup */}
            <div className='flex items-center flex-row lg:flex-col gap-3 lg:gap-4 mb-4'>
                <img src={Personal.Profile} alt="" className='w-20 h-20 md:w-30 md:h-30 lg:w-50 lg:h-50 bg-[#fff0b2] rounded-lg' />
                <div className='lg:text-center lg:w-[70%] lg:mx-auto px-0'>
                    <h1 className='text-2xl font-bold mb-2'>
                        Ahmad Javed
                    </h1>
                    <span className='text-sm md:text-lg text-[#111827] font-light bg-[#fff0b2] px-2 py-1 rounded'>
                        Frontend Developer
                    </span>
                    <p className='text-[12px] md:text-sm text-gray-700 font-light mt-2'>
                        Specializing in FRONTEND Stack -& Modern Web Technologies
                    </p>
                </div>
            </div>

            {/* Contact Details */}
            <div className={`flex flex-col gap-4 border-t border-t-gray-300 pt-4 transition-all duration-500 ease-in-out overflow-hidden
                ${isLargeScreen ? 'max-h-125 opacity-100' : (isContactOpen ? 'max-h-125 opacity-100' : 'max-h-0 opacity-0 border-t-0 pt-0')}
            `}>
                
                {/* Email */}
                <div className='flex gap-3 lg:gap-4 items-center'>
                    <div className='bg-[#fff0b2] w-10 h-10 flex items-center justify-center rounded'>
                        <FaRegEnvelope className='text-xl' />
                    </div>
                    <div>
                        <h3 className='font-semibold'>EMAIL</h3>
                        <p className='text-[12px] md:text-sm text-gray-700 font-light'>
                            ahmadjaved2112sgc@gmail.com
                        </p>
                    </div>
                </div>

                {/* Phone */}
                <div className='flex gap-3 lg:gap-4 items-center'>
                    <div className='bg-[#fff0b2] w-10 h-10 flex items-center justify-center rounded'>
                        <FaPhoneAlt className='text-xl' />
                    </div>
                    <div>
                        <h3 className='font-semibold'>PHONE</h3>
                        <p className='text-[12px] md:text-sm text-gray-700 font-light'>
                            +92 323 8305118
                        </p>
                    </div>
                </div>

                {/* Birthday */}
                <div className='flex gap-3 lg:gap-4 items-center'>
                    <div className='bg-[#fff0b2] w-10 h-10 flex items-center justify-center rounded'>
                        <SlCalender className='text-xl' />
                    </div>
                    <div>
                        <h3 className='font-semibold'>BIRTHDAY</h3>
                        <p className='text-[12px] md:text-sm text-gray-700 font-light'>
                            24/10/2002
                        </p>
                    </div>
                </div>

                {/* Location */}
                <div className='flex gap-3 lg:gap-4 items-center'>
                    <div className='bg-[#fff0b2] w-10 h-10 flex items-center justify-center rounded'>
                        <FaMapMarkerAlt className='text-xl' />
                    </div>
                    <div>
                        <h3 className='font-semibold'>LOCATION</h3>
                        <p className='text-[12px] md:text-sm text-gray-700 font-light'>
                            Bahawalpur, Pakistan
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Sidebar