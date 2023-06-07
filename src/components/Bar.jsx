import { useState } from "react";
import Drink from "./Drink";

const Bar = () => {
  const [drinkList, setDrinkList] = useState(
    [...Array(6)].map(() => crypto.randomUUID())
  );

  const handleAddDrink = () => {
    setDrinkList([crypto.randomUUID(), ...drinkList]);
  };

  return (
    <div className="m-4 p-4 border rounded-2xl shadow-2xl flex-1">
      <button
        onClick={handleAddDrink}
        className="btn btn-primary block mx-auto"
      >
        Add Drink
      </button>

      <div className="grid grid-cols-3 gap-4">
        {drinkList.map((drink) => (
          <div key={drink}>
            <Drink id={drink} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bar;
