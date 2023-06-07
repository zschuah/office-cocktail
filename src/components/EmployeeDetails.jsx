import { twMerge } from "tailwind-merge";
import DialogDrink from "../layout/DialogDrink";
import { useRef } from "react";

const EmployeeDetails = ({ dataDrinks }) => {
  const {
    strDrink,
    strDrinkThumb,
    strIngredient1,
    strIngredient2,
    strIngredient3,
  } = dataDrinks || {};

  const modalRef = useRef();
  const ingredients = [strIngredient1, strIngredient2, strIngredient3].filter(
    (el) => el
  );

  return (
    <div className="flex items-center space-x-4">
      <div
        className={twMerge(
          "grid place-items-center h-32 w-32",
          "bg-secondary mask mask-squircle",
          "cursor-pointer"
        )}
        onClick={() => modalRef.current.showModal()}
      >
        <img
          className="z-10 hover:scale-125 transition"
          src={strDrinkThumb}
          alt={strDrink}
        />
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

      <DialogDrink modalRef={modalRef} {...dataDrinks} />
    </div>
  );
};

export default EmployeeDetails;
