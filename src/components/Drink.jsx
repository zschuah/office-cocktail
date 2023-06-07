import { useRef } from "react";
import { twMerge } from "tailwind-merge";
import DialogDrink from "../layout/DialogDrink";
import { useFetchCocktailQuery } from "../store";

const Drink = ({ id }) => {
  const { data, error, isLoading } = useFetchCocktailQuery(id);
  const { strDrink, strDrinkThumb } = data?.drinks[0] || {};

  const modalRef = useRef();

  return (
    <div className="flex flex-col items-center">
      <div
        className={twMerge(
          "grid place-items-center h-20 w-20",
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
        <span className="loading loading-bars loading-sm absolute"></span>
      </div>

      <p className="w-full text-center truncate" title={strDrink}>
        {strDrink || "Loading..."}
      </p>

      <DialogDrink modalRef={modalRef} {...data?.drinks[0]} />
    </div>
  );
};

export default Drink;
