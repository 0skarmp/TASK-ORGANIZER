
import logo from '../../assets/images/yoshi-removebg-preview.png'
const Navbar = () => {
  return (
    <div className='bg-navbar flex items-center justify-center fixed w-full h-24 font-bold'>
      <img className='w-14 h-18 left-8 fixed' src={logo} alt="" />
      <h1 className='flex left-40 fixed text-black text-5xl '>
        Task Organizer
      </h1>

    </div>
  )
}

export default Navbar