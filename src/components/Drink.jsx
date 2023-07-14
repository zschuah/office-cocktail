import { useRef } from "react";
import { twMerge } from "tailwind-merge";
import DialogDrink from "../layout/DialogDrink";
import { useFetchCocktailQuery } from "../store";

const Drink = ({ id }) => {
  const { data, error, isLoading } = useFetchCocktailQuery(id);
  const { strDrink, strDrinkThumb } = data?.drinks?.[0] || {};

  const modalRef = useRef();

  return (
    <div className="flex flex-col items-center">
      <div
        className={twMerge(
          "grid place-items-center bg-secondary",
          "h-20 w-20",
          // "mask mask-squircle",
          "rounded-2xl overflow-hidden",
          "shadow-[2px_3px_4px] hover:shadow-[4px_6px_8px]",
          "shadow-primary hover:shadow-primary",
          "hover:-translate-y-1",
          "cursor-pointer relative transition"
        )}
        onClick={() => modalRef.current.showModal()}
      >
        <img className="z-10" src={strDrinkThumb} alt={strDrink} />
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
