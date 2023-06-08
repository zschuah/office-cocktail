import { useDispatch } from "react-redux";
import DrinkList from "../components/DrinkList";
import EmployeeList from "../components/EmployeeList";
import { resetApp } from "../store/actions";

const MainPage = () => {
  const dispatch = useDispatch();

  return (
    <main className="flex flex-col md:flex-row">
      <DrinkList />
      <EmployeeList />

      <button
        className="btn btn-accent block mx-auto absolute top-4 right-4"
        onClick={() => dispatch(resetApp())}
      >
        Reset
      </button>
    </main>
  );
};

export default MainPage;
