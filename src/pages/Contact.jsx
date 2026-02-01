import { Location } from '../utils/Constrains.jsx'

const Contact = () => {
  return (
    <div id='contact' className='py-10'>
      <h1 className='text-[#181B26] text-5xl sm:text-7xl md:text-8xl xl:text-9xl uppercase font-extrabold leading-slung' >
        LET'S BUILD {' '} <br />
        <span className='bg-clip-text text-transparent bg-linear-to-r from-[#181B26] to-[#F37016]'>
          SUCCESS
        </span>
      </h1 >

      {/* Contact Section */}
      <div className='mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8'>
        {/* Form Container */}
        <div className='bg-card-bg border border-gray-300 rounded-lg p-6'>
          <h3 className='text-2xl font-bold text-text mb-6 text-gray-700'>Get in Touch</h3>

          <form className='space-y-6'>
            <div>

              <div className='mb-4'>
                <label for="userName" className='block text-text-gray-700 text0sm mb-2'>Name</label>
                <input type="text" id='userName' placeholder='Your Name' className='w-full p-3 border border-gray-300 bg-transparent text-text rounded focus:outline-none focus:border-accent' value = "" />
              </div>

              <div className='mb-4'>
                <label for="userEmail" className='block text-text-gray-700 text0sm mb-2'>Email</label>
                <input type="email" id='userEmail' placeholder='Your Email' className='w-full p-3 border border-gray-300 bg-transparent text-text rounded focus:outline-none focus:border-accent' value = "" />
              </div>

              <div className='mb-4'>
                <label for="userBudget" className='block text-text-gray-700 text0sm mb-2'>Budget (Optional)</label>
                <input type="text" id='userBudget' placeholder='Your Budget' className='w-full p-3 border border-gray-300 bg-transparent text-text rounded focus:outline-none focus:border-accent' value = "" />
              </div>

              <div className='mb-4'>
                <label for="userMessage" className='block text-text-gray-700 text0sm mb-2'>Message</label>
                <input type="text" id='userMessage' placeholder='Your Message' className='w-full p-3 border border-gray-300 bg-transparent text-text rounded focus:outline-none focus:border-accent' value = "" />
              </div>

            </div>

            <div className='flex justify-end'>
              <button type='submit' className='text-white font-semibold bg-linear-to-r from-accent to-accent-hover w-28 h-10 rounded-md border border-border hover:scale-105 duration-200 hover:border-border hover:from-accent-hover hober:to-accent cursor-pointer'>Send</button>
            </div>
          </form>

        </div>

        {/* Location */}
        <div className='bg-card-bg border border-gray-300 rounded-lg p-6'>
          <h3 className='text-2xl font-bold text-text mb-6 text-gray-700'>Location</h3>

          <div className='aspect-video w-full overflow-hidden rounded-lg'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.424003200911!2d67.00124577476986!3d24.913477277884673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f4d4d5f7d5f%3A0x1e3e3e3e3e3e3e3e!2sKarachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
              className='w-full h-full'
            ></iframe>
          </div>

          <div className='mt-6 space-y-4'>

            {
              Location.map((item) => (
                <div className='flex items-center gap-3'>
                  <div className='w-10 h-10 rounded-full bg-[#fff0b2] flex items-center justify-center'>{item.icon}</div>
                  <div>
                    <h4 className='text-text font-semibold'>{item.label}</h4>
                    <p className='text-text-gray-700 text-sm'>{item.place}</p>
                  </div>
                </div>
              ))
            }

          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact