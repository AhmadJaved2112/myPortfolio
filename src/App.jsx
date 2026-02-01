import Sidebar from './components/Sidebar'
import Main from './components/Main'
import Header from './components/Header'

const App = () => {
  return (
    <div className='relative'>
      <Header />
      <div className='container px-4 md:px-0 flex flex-col lg:flex-row gap-5 mx-auto py-5'>
        <Sidebar />
        <div className='w-full bg-[#fcf1e5] min-h-screen rounded-lg p-6 relative'>
          <Main />
        </div>
      </div>
    </div>
  )
}

export default App