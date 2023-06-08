import { twMerge } from "tailwind-merge";
import CocktailImg from "../assets/cocktail.svg";

const Header = () => {
  return (
    <header
      className={twMerge(
        "flex flex-col sm:flex-row",
        "justify-center items-center py-5"
      )}
    >
      <img src={CocktailImg} alt="cocktail" className="h-20" />
      <h1 className="text-5xl font-[Pattaya]">Office Cocktail</h1>
    </header>
  );
};

export default Header;
