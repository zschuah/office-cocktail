import { useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import CocktailImg from "../assets/cocktail.svg";

const Header = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <header
      className={twMerge(
        "flex flex-col sm:flex-row",
        "justify-center items-center py-5"
      )}
    >
      <img
        src={CocktailImg}
        alt="cocktail"
        className="h-20 cursor-pointer"
        onClick={handleNavigate}
      />
      <h1
        className="text-5xl font-[Pattaya] cursor-pointer"
        onClick={handleNavigate}
      >
        Office Cocktail
      </h1>
    </header>
  );
};

export default Header;
