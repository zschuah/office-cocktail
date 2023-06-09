import { useNavigate } from "react-router-dom";
import Dialog from "./Dialog";

const DialogDrink = ({
  strDrink,
  strDrinkThumb,
  strIngredient1,
  strIngredient2,
  strIngredient3,
  strInstructions,
  strMeasure1,
  strMeasure2,
  strMeasure3,
  modalRef,
}) => {
  const ingredients = [
    { ingredient: strIngredient1, measure: strMeasure1 },
    { ingredient: strIngredient2, measure: strMeasure2 },
    { ingredient: strIngredient3, measure: strMeasure3 },
  ].filter((el) => el.ingredient);

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/drink/" + strDrink);
  };

  return (
    <Dialog modalRef={modalRef}>
      <div className="space-y-4">
        <h3 className="text-center">{strDrink}</h3>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <img
            className="w-40 mask mask-squircle"
            src={strDrinkThumb}
            alt={strDrink}
          />

          <div className="flex flex-col items-center space-y-2">
            {ingredients?.map((el) => (
              <div key={el.ingredient} className="join">
                <div className="badge badge-neutral join-item">
                  {el.measure || "+"}
                </div>
                <div className="badge badge-secondary join-item">
                  {el.ingredient}
                </div>
              </div>
            ))}
          </div>
        </div>

        <p>{strInstructions}</p>

        <button
          className="btn btn-primary block mx-auto"
          onClick={handleNavigate}
        >
          View Page
        </button>
      </div>
    </Dialog>
  );
};

export default DialogDrink;
