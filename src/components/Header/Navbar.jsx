import Account from "./Account"
import Logo from "./Logo"

const Navbar = () => {
  return (
    <>
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
      <Logo />
      <Account />
    </div>
    </>
  )
}

export default Navbar