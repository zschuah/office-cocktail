import { useDispatch } from "react-redux";
import { removeEmployee, useFetchCocktailQuery } from "../store";
import { twMerge } from "tailwind-merge";
import EmployeeDetails from "./EmployeeDetails";

const Employee = ({ employee }) => {
  const dispatch = useDispatch();
  const { data, error, isLoading } = useFetchCocktailQuery(employee);
  const { strDrink } = data?.drinks[0] || {};

  const handleRemoveEmployee = () => {
    dispatch(removeEmployee(employee.id));
  };

  return (
    <div className="flex border rounded-xl overflow-hidden shadow mb-4 relative">
      <div className="w-1/4 h-60 bg-primary">
        <img
          className="h-full w-full object-cover"
          src={employee.image}
          alt={employee.name}
        />
      </div>

      <div className="w-3/4 p-4 flex flex-col items-start">
        <h2>{employee.name}</h2>
        <p>Favourite drink: {strDrink || "Loading..."}</p>

        <EmployeeDetails employee={employee} {...data?.drinks[0]} />

        {/* <div className="flex items-center space-x-4">
          <div
            className={twMerge(
              "grid place-items-center h-32 w-32",
              "bg-secondary mask mask-squircle"
            )}
          >
            <img className="z-10" src={strDrinkThumb} alt={strDrink} />
            <span className="loading loading-bars loading-lg absolute"></span>
          </div>

          <div className="flex flex-col space-y-2">
            {ingredients.map((ingredient) => (
              <div key={ingredient} className="badge badge-secondary">
                {ingredient}
              </div>
            ))}
          </div>

          <div className="tooltip tooltip-bottom" data-tip="Alcohol tolerance">
            <div
              className="radial-progress bg-accent text-accent-content border-4 border-accent"
              style={{ "--value": employee.tolerance }}
            >
              {employee.tolerance}%
            </div>
          </div>
        </div> */}

        <button
          className={twMerge(
            "btn btn-primary btn-square text-3xl",
            "absolute top-0 right-0 rounded-none rounded-bl-xl"
          )}
          onClick={handleRemoveEmployee}
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Employee;
