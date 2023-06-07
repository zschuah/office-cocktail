import { useDispatch, useSelector } from "react-redux";
import { twMerge } from "tailwind-merge";
import { addEmployee } from "../store";
import Employee from "./Employee";

const EmployeeList = () => {
  const dispatch = useDispatch();
  const employeeList = useSelector((state) => state.employee);

  const handleAddEmployee = () => {
    dispatch(addEmployee());
  };

  return (
    <div
      className={twMerge(
        "m-4 p-4 border rounded-2xl shadow-2xl",
        "max-w-5xl mx-auto"
      )}
    >
      {employeeList?.map((employee) => {
        return (
          <div key={employee.id}>
            <Employee employee={employee} />
          </div>
        );
      })}

      <button
        className="btn btn-primary block mx-auto"
        onClick={handleAddEmployee}
      >
        Add Employee
      </button>
    </div>
  );
};

export default EmployeeList;
