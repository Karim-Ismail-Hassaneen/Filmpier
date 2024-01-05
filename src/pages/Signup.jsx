/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from '../context/AuthContext'
import { useState } from "react";
const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {user, signUp} = UserAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await signUp(email, password)
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="w-full h-screen">
      <img
        className="hidden sm:block absolute w-full h-screen object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/8142681c-c636-423f-8b18-962de87a6143/EG-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="Netflix background image"
      />
      <div className="bg-black/70 fixed top-0 left-0 w-full h-screen"></div>
      <div className="fixed w-full px-4 py-24 z-50">
        <div className="max-w-[450px] h-[600px] mx-auto text-white bg-black/85">
          <div className="max-w-[350px] mx-auto py-16">
            <h1 className="text-2xl font-bold">Sign Up</h1>
            <form onSubmit={handleSubmit} className="w-full flex flex-col py-4">
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 my-2 bg-gray-600 rounded"
                type="email"
                placeholder="E-mail"
                autoComplete="email"
                required
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="p-3 my-2 bg-gray-600 rounded"
                type="password"
                placeholder="Password"
                autoComplete="current-password"
                required
              />
              <button className="bg-[#fe0000] py-3 my-6 font-bold rounded text-white">
                Sign Up
              </button>
              <div className="flex justify-between items-center text-sm text-gray-400">
                <p>
                  <input className="mr-2" type="checkbox" />
                  Remember Me
                </p>
                <p>Need Help?</p>
              </div>
              <p className="text-gray-400 my-3">
                Already Subscribed to Filmpier?{" "}
                <Link className="text-white" to="/signin">
                  Sign In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
