import { useFetchCocktailQuery } from "../store";
import { twMerge } from "tailwind-merge";

const Drink = ({ id }) => {
  const { data, error, isLoading } = useFetchCocktailQuery(id);
  const { strDrink, strDrinkThumb } = data?.drinks[0] || {};

  return (
    <div className="flex flex-col items-center">
      <div
        className={twMerge(
          "grid place-items-center h-20 w-20",
          "bg-secondary mask mask-squircle"
        )}
      >
        <img className="z-10" src={strDrinkThumb} alt={strDrink} />
        {/* LOADING SPINNER */}
        <span className="loading loading-bars loading-sm absolute"></span>
      </div>

      <p className="w-full text-center truncate" title={strDrink}>
        {strDrink || "Loading..."}
      </p>
    </div>
  );
};

export default Drink;
