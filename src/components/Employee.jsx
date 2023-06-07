import { useDispatch } from "react-redux";
import { removeEmployee, useFetchCocktailQuery } from "../store";
import { twMerge } from "tailwind-merge";
import EmployeeDetails from "./EmployeeDetails";

const Employee = ({ employee }) => {
  const dispatch = useDispatch();
  const { data, error, isLoading } = useFetchCocktailQuery(employee.id);
  const { strDrink } = data?.drinks[0] || {};

  const handleRemoveEmployee = () => {
    dispatch(removeEmployee(employee.id));
  };

  return (
    <div className="flex border rounded-xl overflow-hidden shadow relative">
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

        <EmployeeDetails {...data?.drinks[0]} />

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
