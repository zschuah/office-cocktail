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
    <div className="flex items-center gap-1 sm:gap-4">
      <div
        className={twMerge(
          "grid place-items-center",
          "bg-secondary mask mask-squircle",
          "cursor-pointer",
          "h-14 w-14 sm:h-32 sm:w-32 "
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
          <div key={ingredient} className="badge badge-secondary h-fit">
            {ingredient}
          </div>
        ))}
      </div>

      <DialogDrink modalRef={modalRef} {...dataDrinks} />
    </div>
  );
};

export default EmployeeDetails;
