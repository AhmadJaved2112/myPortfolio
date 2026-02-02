import { Personal } from '../utils/Constrains.jsx'
import DarkMood from './DarkMood.jsx'

const Generic = () => {
  return (
    <div className='flex justify-between items-center border-b border-b-gray-400 dark:border-[#3F3F46] pb-4 mb-4'>
      <img 
        src={Personal.Logo} 
        alt="Logo" 
        className='w-25 lg:w-30 animate-scaleBeat hover:scale-110 transition-all duration-300' 
      />
      <div className='flex gap-4 items-center'>
        <DarkMood />
        <a 
          href={Personal.Resume} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-#3F3F46] dark:text-white bg-[#fff0b2] dark:bg-[#262626]  px-4 py-2 rounded hidden lg:block border border-gray-400 dark:border-[#3F3F46] hover:scale-110 transition-all duration-300"
        >
          Resume
        </a>
      </div>
    </div>
  )
}

export default Generic