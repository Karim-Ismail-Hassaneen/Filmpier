import { Link } from "react-router-dom"

const Account = () => {
  return (
    <div className="flex items-center gap-3 bg-transparent">
    <Link to="/login" className='bg-transparent'>
      <p className="text-lg text-white bg-transparent">Login</p>
    </Link>

    <Link to="/Signup">
      <button className="bg-[#fe0000] text-lg text-center px-5 py-2 rounded-sm text-white hover:bg-transparent duration-700">
        SignUp
      </button>
    </Link>
  </div>
  )
}

export default Account