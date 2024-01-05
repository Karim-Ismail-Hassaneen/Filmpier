import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div className="w-full h-screen">
      <img
        className="hidden sm:block absolute w-full h-screen object-cover"
        src="/public/assets/images/hero.jpg"
        alt="Netflix background image"
      />
      <div className="bg-black/70 fixed top-0 left-0 w-full h-screen"></div>
      <div className="fixed w-full px-4 py-24 z-50">
        <div className="max-w-[450px] h-[600px] mx-auto text-white bg-black/85">
          <div className="max-w-[350px] mx-auto py-16">
            <h1 className="text-2xl font-bold">Sign In</h1>
            <form className="w-full flex flex-col py-4">
              <input
                className="p-3 my-2 bg-gray-600 rounded"
                type="email"
                placeholder="E-mail"
                autoComplete="email"
              />
              <input
                className="p-3 my-2 bg-gray-600 rounded"
                type="password"
                placeholder="Password"
                autoComplete="current-password"
              />
              <button className="bg-[#fe0000] py-3 my-6 font-bold rounded text-white">
                Sign In
              </button>
              <div className="flex justify-between items-center text-sm text-gray-400">
                <p>
                  <input className="mr-2" type="checkbox" />
                  Remember Me
                </p>
                <p>Forgot Your Password</p>
              </div>
              <p className="text-gray-400 my-3">
                New to Filmpier?{" "}
                <Link className="text-white" to="/signup">
                  Sign Up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
