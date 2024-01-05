import SavedMovies from "../components/SavedMovies";

const Profile = () => {
  return (
    <>
      <div className="w-full text-white">
        <img
          className="w-full h-[600px] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/8142681c-c636-423f-8b18-962de87a6143/EG-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Netflix background image"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[750px]"></div>
        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">My Shows</h1>
        </div>
      </div>
      <SavedMovies />
    </>
  );
};

export default Profile;
