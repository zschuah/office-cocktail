import { twMerge } from "tailwind-merge";

const EmployeeDetails = ({
  strDrink,
  strDrinkThumb,
  strIngredient1,
  strIngredient2,
  strIngredient3,
}) => {
  const ingredients = [strIngredient1, strIngredient2, strIngredient3].filter(
    (el) => el
  );

  return (
    <div className="flex items-center space-x-4">
      <div
        className={twMerge(
          "grid place-items-center h-32 w-32",
          "bg-secondary mask mask-squircle"
        )}
      >
        <img className="z-10" src={strDrinkThumb} alt={strDrink} />
        {/* LOADING SPINNER */}
        <span className="loading loading-bars loading-lg absolute"></span>
      </div>

      <div className="flex flex-col space-y-2">
        {ingredients.map((ingredient) => (
          <div key={ingredient} className="badge badge-secondary">
            {ingredient}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeDetails;
