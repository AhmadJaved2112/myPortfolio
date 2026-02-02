import { LuMaximize2 } from 'react-icons/lu'
import { Project } from '../utils/Constrains.jsx'
import { FaGithub } from 'react-icons/fa'
import { GoLinkExternal } from 'react-icons/go'

const Projects = () => {

  return (

    <div id='projects'>
      <h1 className='text-[#181B26] dark:text-white text-5xl sm:text-7xl md:text-8xl xl:text-9xl uppercase font-extrabold leading-slung' >
        RECENT {' '} <br />
        <span className='bg-clip-text text-transparent bg-linear-to-r from-[#181B26] dark:from-white to-[#F37016]'>
          PROJECTS
        </span>
      </h1 >

      {/* Projects Section */}
      <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10'>
        {
          Project.map((item) => (
            <div key={item.id} className='group relative bg-card-bg border border-gray-300 dark:border-[#3F3F46] rounded-lg overflow-hidden transition-all duration-300 hover:border-gray-300'>

              <div className='relative aspect-video overflow-hidden'>
                <img src={item.image} alt={item.title} className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 ' loading='lazy' />

                <div className='absolute top-0 p-2 left-0 w-full -translate-y-8 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 flex items-center justify-between'>
                  <span className='px-3 py-1 text-xs rounded-full bg-amber-600 text-white z-10'>{item.title}</span>
                  <button className='p-2 text-white bg-amber-600 rounded-md hover:bg-accent-hover transition-colors duration-300 z-10'><LuMaximize2 /></button>
                </div>

              </div>

              <div className='p-4'>

                <div className='mb-2'>
                  <h3 className='dark:text-white text-2xl font-bold text-text'>{item.title}</h3>
                </div>

                <p className='text-text-gray-700 dark:text-[#A8A29E] text-sm line-clamp-3'>{item.description}</p>

              </div>

              <div className='flex items-center justify-between p-4'>

                <div className='flex items-center gap-2'>
                  <a href={item.code} target='_blank' rel='noopener noreferrer' className='px-3 py-1 rounded-full text-white flex items-center gap-2 bg-[#F97316] hover-bg-[#fa7f27] hover-text-white transition-colors duration-300' title='View Code'><p>Code</p> <FaGithub /> </a>

                  <a href={item.demo} target='_blank' rel='noopener noreferrer' className='px-3 py-1 rounded-full text-white flex items-center gap-2 bg-[#F97316] hover-bg-[#fa7f27] hover-text-white transition-colors duration-300' title='View Code'><p>Demo</p> <GoLinkExternal /> </a>
                </div>

              </div>

            </div>
          ))
        }
      </div>

    </div>
  )
}

export default Projects