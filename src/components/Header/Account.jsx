import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

const Account = () => {
  const { user, logOut } = UserAuth();
  console.log(user);
  const navigate = useNavigate();
  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {user?.email ? (
        <div className="flex items-center gap-3 bg-transparent">
          <Link to="/Profile" className="bg-transparent">
            <p className="text-lg text-white bg-transparent">Profile</p>
          </Link>
          <button
            onClick={handleLogOut}
            className="bg-[#fe0000] text-lg text-center px-5 py-2 rounded-sm text-white hover:bg-transparent duration-700"
          >
            Log Out
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-3 bg-transparent">
          <Link to="/SignIn" className="bg-transparent">
            <p className="text-lg text-white bg-transparent">Sign In</p>
          </Link>

          <Link to="/Signup">
            <button className="bg-[#fe0000] text-lg text-center px-5 py-2 rounded-sm text-white hover:bg-transparent duration-700">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Account;
