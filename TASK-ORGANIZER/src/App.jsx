import List from './Pages/Folder/Index'
import Navbar from './Pages/Navbar/Index'

function App() {


  return (
    <>
      <div className='fixed bg-black'>
        <Navbar />
        <div className='mt-24'>
          <List />
        </div>
      </div>


    </>
  )
}

export default App
