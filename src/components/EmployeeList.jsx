import { useState } from "react";
import { generateEmployee } from "../utils/staff";
import Employee from "./Employee";
import { twMerge } from "tailwind-merge";

const EmployeeList = () => {
  const [employeeList, setEmployeeList] = useState(
    [...Array(3)].map(() => generateEmployee())
  );

  const handleAddEmployee = () => {
    setEmployeeList([...employeeList, generateEmployee()]);
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

      <button className="btn block mx-auto" onClick={handleAddEmployee}>
        Add employee
      </button>
    </div>
  );
};

export default EmployeeList;
