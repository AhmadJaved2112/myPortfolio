import { FaArrowUp } from 'react-icons/fa'
import { Skill } from '../utils/Constrains.jsx'

const Skills = () => {
  return (
    <div id='skills' className='py-10'>
      <h1 className='text-[#181B26] text-5xl sm:text-7xl md:text-8xl xl:text-9xl uppercase font-extrabold leading-slung' >
        THINGS I'M {' '} <br />
        <span className='bg-clip-text text-transparent bg-linear-to-r from-[#181B26] to-[#F37016]'>
          GREAT AT
        </span>
      </h1 >

      {/* Skills section */}
      <div className='mt-10 opacity-100'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          {Skill.map((item) => (
            <div
              key={item.id}
              className='cursor-pointer group hover:scale-[1.02] transition-transform duration-300'
            >

              <div className='relative w-full border border-gray-300 rounded-lg flex flex-col items-start justify-start gap-3 p-6 overflow-hidden bg-transparent shadow-lg hover:shadow-xl transition-all duration-300'>


                <span
                  className='absolute top-0 right-0 w-24 h-24 bg-linear-to-br from-blue-600/60 via-purple-500/40 to-transparent blur-2xl rounded-full pointer-events-none z-20'
                  style={{ transform: 'translate(30%, -30%)' }}
                ></span>
                


                <div className='flex gap-3 items-center relative z-10'>
                  <div className='w-10 h-10 bg-white flex justify-center items-center rounded-lg border border-gray-300'>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className='text-gray-800 text-xl font-bold'>{item.title}</h4>
                    <span className={`font-semibold text-xs px-3 py-1 rounded-full bg-linear-to-r from-green-500 to-green-700 text-white`}>
                      {item.level}
                    </span>
                  </div>
                </div>


                <p className='text-gray-600 text-sm mt-2 line-clamp-3'>{item.description}</p>


                <div className='mt-4'>
                  <a
                  href={item.link}
                    target='_blank'
                    rel='noopener noreferrer'
                  className='inline-flex items-center gap-2 text-orange-500 font-semibold mt-4 group-hover:underline transition-all'>
                    Read More 
                    <FaArrowUp className='w-4 h-4 transform rotate-45 translate-y-0.5 transition-transform' />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills;