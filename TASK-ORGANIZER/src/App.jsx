import List from './Pages/Folder/Index'
import Navbar from './Pages/Navbar/Index'
import './App.css'

function App() {


  return (
    <>
      <div className='fixed bg-222ab'>
        <Navbar />
        <div className='mt-24'>
          <List />
        </div>
      </div>


    </>
  )
}

export default App
