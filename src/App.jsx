import Sidebar from './components/Sidebar'
import Main from './components/Main'
import Header from './components/Header'

const App = () => {
  return (
    <div className='relative dark:bg-[#0F0F0F]'>
      <Header />
      <div className='container px-4 md:px-0 flex flex-col lg:flex-row gap-5 mx-auto py-5'>
        <Sidebar />
        <div className='w-full bg-[#fcf1e5] dark:bg-[#1C1C1C] min-h-screen rounded-lg p-6 relative border border-transparent dark:border-[#3F3F46]'>
          <Main />
        </div>
      </div>
    </div>
  )
}

export default App