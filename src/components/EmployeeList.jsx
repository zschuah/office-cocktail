import { useDispatch, useSelector } from "react-redux";
import Card from "../layout/Card";
import { addEmployee } from "../store";
import { generateEmployee } from "../utils/staff";
import Employee from "./Employee";

const EmployeeList = () => {
  const dispatch = useDispatch();
  const employeeList = useSelector((state) => state.employee);

  const handleAddEmployee = () => {
    const employee = generateEmployee();
    dispatch(addEmployee(employee));
  };

  return (
    <Card className="flex-[2]">
      <button
        className="btn btn-primary block mx-auto"
        onClick={handleAddEmployee}
      >
        Add Employee
      </button>

      {employeeList?.map((employee) => {
        return (
          <div key={employee.id}>
            <Employee employee={employee} />
          </div>
        );
      })}
    </Card>
  );
};

export default EmployeeList;
