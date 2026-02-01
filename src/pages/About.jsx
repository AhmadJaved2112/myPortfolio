import { Experience, Personal } from '../utils/Constrains.jsx'

const About = () => {
  return (
    <div id='about'>
      <div>
        <h1 className='text-[#181B26] text-5xl sm:text-7xl md:text-8xl xl:text-9xl uppercase font-extrabold leading-slung'>
          Frontend{' '}
          <span className='bg-clip-text text-transparent bg-linear-to-r from-[#181B26] to-[#F37016]'>
            Developer
          </span>
        </h1>
        <p className='text-gray-700 mt-4 md:mt-6 w-full md:w-3/4 lg:w-1/2 text-wrap text-base sm:text-lg md:text-xl leading-relaxed'>
          I am a skilled Frontend Developer with 5 years of experience and a certificate from the ALX Software Engineering program. I specialize in creating intuitive and engaging user interfaces, transforming innovative designs into beautifully crafted and functional web applications. My passion lies in delivering cutting-edge frontend solutions that align with user needs and industry standards.
        </p>
      </div>

      {/* Experience Section */}
      <div className='flex gap-5 md:gap-10 my-16'>
        {
          Experience.map((item) => (
            <div key={item.id} className='text-text'>
              <h3 className='text-4xl md:text-5xl lg:text-7xl font-extrabold'>{item.numbers}</h3>
              <p className='text-text-gray-700 uppercase text-lg sm-text-sm break-word'>{item.label1} <br /> {item.label2}</p>
            </div>
          ))
        }
      </div>

      {/*  */}
      <button className='cursor-pointer mt-4 text-white bg-linear-to-r from-[#b0c216] to-[#F37016] w-28 h-10 rounded-md border border-gray-300 hover:scale-105 duration-300 transition-all'>
        <a
          href={Personal.Resume}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full h-full flex items-center justify-center"
        >
          Resume
        </a>
      </button>
    </div>
  )
}

export default About