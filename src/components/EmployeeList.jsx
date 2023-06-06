import { useState } from "react";
import { generateEmployee } from "../utils/staff";
import Employee from "./Employee";

const EmployeeList = () => {
  const [employeeList, setEmployeeList] = useState(
    [...Array(1)].map(() => generateEmployee())
  );

  const handleAddEmployee = () => {
    setEmployeeList([...employeeList, generateEmployee()]);
  };

  return (
    <div className="m-4 p-4 border shadow">
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
