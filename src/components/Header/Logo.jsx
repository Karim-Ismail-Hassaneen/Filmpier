import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <>
      <Link to="/">
        <img
          src="/public/assets/images/filmpier.png"
          alt="filmpier"
          className="w-[140px]"
        />
      </Link>
    </>
  );
};

export default Logo;
