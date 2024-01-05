import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Signin" element={<Signin />}/>
        <Route path="/Signup" element={<Signup />}/>
        <Route path="/Profile" element={<Profile />}/>
      </Routes>
    </>
  );
}

export default App;
