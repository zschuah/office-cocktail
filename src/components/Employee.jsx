const Employee = ({ employee }) => {
  return (
    <div className="border mb-4 flex rounded-xl overflow-hidden shadow">
      <div className="w-1/4 h-60 bg-primary">
        <img
          className="h-full w-full object-cover"
          src={employee.image}
          alt={employee.name}
        />
      </div>

      <div className="w-3/4 p-4">
        <p>{employee.name}</p>
      </div>
    </div>
  );
};

export default Employee;
