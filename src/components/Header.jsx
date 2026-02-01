import React from 'react'
import { FaRegUser, FaWrench } from 'react-icons/fa'
import { IoIosCall } from 'react-icons/io'
import { LuBriefcase, LuSquarePen } from 'react-icons/lu'
import { Link } from 'react-scroll';

const Header = () => {

  const navLinks = [
    {
      icon: <FaRegUser className='text-[16px] md:text-xl mb-1' />,
      lable: "About",
      path: "about"
    },
    {
      icon: <FaWrench className='text-[16px] md:text-xl mb-1' />,
      lable: "Skills",
      path: "skills"
    },
    {
      icon: <LuBriefcase className='text-[16px] md:text-xl mb-1' />,
      lable: "Projects",
      path: "projects"
    },
    {
      icon: <LuSquarePen className='text-[16px] md:text-xl mb-1' />,
      lable: "Blogs",
      path: "blogs"
    },
    {
      icon: <IoIosCall className='text-[16px] md:text-xl mb-1' />,
      lable: "Contact",
      path: "contact"
    }
  ]

  return (
    <div className='absolute'>
      <nav className='flex gap-3 md:gap-5 fixed bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-12.5 z-50 p-3 bg-white/40 backdrop-blur-xs rounded-lg border-2 border-gray-200'>
        {
          navLinks.map((item) => (
            <Link
              activeClass="active"
              to={item.path}
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              key={item.path}
              className='flex flex-col items-center hover:text-orange-700 transition-all duration-300 cursor-pointer hover:scale-110'
            >
              <span>{item.icon}</span>
              <p className='text-[14px]'>{item.lable}</p>
            </Link>
          ))
        }
      </nav>
    </div>
  )
}

export default Header