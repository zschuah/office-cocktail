import { useNavigate, useParams } from "react-router-dom";
import BottleImg from "../assets/bottle.png";
import { useFetchCocktailByNameQuery } from "../store";

const InfoPage = () => {
  const navigate = useNavigate();
  const { drink } = useParams();
  const { data, error, isLoading } = useFetchCocktailByNameQuery(drink);
  const {
    strDrink,
    strDrinkThumb,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strInstructions,
    strMeasure1,
    strMeasure2,
    strMeasure3,
    strMeasure4,
    strMeasure5,
  } = data?.drinks?.[0] || {};
  const ingredients = [
    { ingredient: strIngredient1, measure: strMeasure1 },
    { ingredient: strIngredient2, measure: strMeasure2 },
    { ingredient: strIngredient3, measure: strMeasure3 },
    { ingredient: strIngredient4, measure: strMeasure4 },
    { ingredient: strIngredient5, measure: strMeasure5 },
  ].filter((el) => el.ingredient);

  if (isLoading) {
    return (
      <div className="m-4 p-4 border rounded-2xl shadow-2xl">
        <span className="loading loading-bars w-60 block mx-auto"></span>
      </div>
    );
  }

  if (!strDrink) {
    return (
      <div className="m-4 p-4 border rounded-2xl shadow-2xl inline-block">
        <div className="flex flex-col items-center space-y-4">
          <h2>Hmm, your drink does not seem to exist.</h2>
          <img className="w-80" src={BottleImg} alt="bottle" />
        </div>
      </div>
    );
  }

  return (
    <div className="m-4 p-4 border rounded-2xl shadow-2xl inline-block">
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

        <p className="text-center">{strInstructions}</p>

        <button
          className="btn btn-primary block mx-auto"
          onClick={() => navigate("/")}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default InfoPage;
