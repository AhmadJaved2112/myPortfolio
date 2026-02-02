import { Blog } from '../utils/Constrains.jsx'
import { FaArrowUp } from 'react-icons/fa'

const Blogs = () => {
  return (
    <div id='blogs' className='py-10'>
      <h1 className='text-[#181B26] dark:text-white text-5xl sm:text-7xl md:text-8xl xl:text-9xl uppercase font-extrabold leading-tight'>
        Latest {' '}
        <br />
        <span className='bg-clip-text text-transparent bg-linear-to-r from-[#181B26] dark:from-white to-[#F37016]'>
          Blogs
        </span>
      </h1>

      {/* Blogs section */}
      <div className='mt-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          {Blog.map((item) => (
            <a 
              key={item.id} 
              href={item.link} 
              target='_blank' 
              rel='noopener noreferrer' 
              className='relative inline-flex w-full overflow-hidden rounded-2xl p-0.5 focus:outline-none group hover:scale-[1.025] transition-transform duration-300'
            >
              <div className='flex flex-col bg-transparent border border-gray-300 rounded-2xl w-full relative z-10 overflow-hidden'>
                

                <span
                  className='absolute top-0 right-0 w-24 h-24 bg-linear-to-br from-blue-600/60 via-purple-500/40 to-transparent rounded-full blur-2xl pointer-events-none z-20'
                  style={{ transform: 'translate(30%, -30%)' }}
                ></span>


                <div className='p-6 flex flex-col flex-1 justify-between'>
                  <div>
                    <h3 className='text-2xl font-bold text-gray-800 dark:text-white mb-3'>{item.title}</h3>
                    <p className='text-gray-600 dark:text-[#A8A29E] text-base overflow-hidden mb-4 flex-1 line-clamp-3'>
                      {item.description}
                    </p>
                  </div>

                  <div className='inline-flex items-center gap-2 text-orange-500 dark:text-white font-semibold mt-4 group-hover:underline transition-all dark:hover:text-orange-500'>
                    Read More 
                    <FaArrowUp className='w-4 h-4 transform rotate-45 translate-y-0.5 transition-transform' />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blogs