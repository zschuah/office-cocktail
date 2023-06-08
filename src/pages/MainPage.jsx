import DrinkList from "../components/DrinkList";
import EmployeeList from "../components/EmployeeList";

const MainPage = () => {
  return (
    <main className="flex flex-col md:flex-row">
      <DrinkList />
      <EmployeeList />
    </main>
  );
};

export default MainPage;
