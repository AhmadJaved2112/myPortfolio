import { Personal } from '../utils/Constrains.jsx'

const Generic = () => {
  return (
    <div className='flex justify-between items-center border-b border-b-gray-300 pb-4 mb-4'>
      <img 
        src={Personal.Logo} 
        alt="Logo" 
        className='w-25 lg:w-30 animate-scaleBeat hover:scale-110 transition-all duration-300' 
      />
      <div>
        <a 
          href={Personal.Resume} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-700 bg-[#fff0b2] px-4 py-2 rounded hidden lg:block border border-gray-300 hover:scale-110 transition-all duration-300"
        >
          Resume
        </a>
      </div>
    </div>
  )
}

export default Generic