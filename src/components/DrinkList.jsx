import { useDispatch, useSelector } from "react-redux";
import Card from "../layout/Card";
import { addDrink } from "../store";
import Drink from "./Drink";

const DrinkList = () => {
  const dispatch = useDispatch();
  const drinkList = useSelector((state) => state.bar);

  const handleAddDrink = () => {
    const drink = crypto.randomUUID();
    dispatch(addDrink(drink));
  };

  return (
    <Card className="flex-1">
      <button
        onClick={handleAddDrink}
        className="btn btn-primary block mx-auto"
      >
        Add Drink
      </button>

      <div className="grid grid-cols-3 gap-4 mt-4">
        {drinkList.map((drink) => (
          <div key={drink}>
            <Drink id={drink} />
          </div>
        ))}
      </div>
    </Card>
  );
};

export default DrinkList;
