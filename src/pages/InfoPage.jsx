import { useNavigate, useNavigationType, useParams } from "react-router-dom";
import BottleImg from "../assets/bottle.png";
import Card from "../layout/Card";
import { useFetchCocktailByNameQuery } from "../store";

const InfoPage = () => {
  const navigate = useNavigate();
  const navigationType = useNavigationType();

  const { drink } = useParams();
  const { data, error, isLoading, isFetching } =
    useFetchCocktailByNameQuery(drink);
  const {
    strDrink,
    strDrinkThumb,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strIngredient9,
    strInstructions,
    strMeasure1,
    strMeasure2,
    strMeasure3,
    strMeasure4,
    strMeasure5,
    strMeasure6,
    strMeasure7,
    strMeasure8,
    strMeasure9,
  } = data?.drinks?.[0] || {};
  const ingredients = [
    { ingredient: strIngredient1, measure: strMeasure1 },
    { ingredient: strIngredient2, measure: strMeasure2 },
    { ingredient: strIngredient3, measure: strMeasure3 },
    { ingredient: strIngredient4, measure: strMeasure4 },
    { ingredient: strIngredient5, measure: strMeasure5 },
    { ingredient: strIngredient6, measure: strMeasure6 },
    { ingredient: strIngredient7, measure: strMeasure7 },
    { ingredient: strIngredient8, measure: strMeasure8 },
    { ingredient: strIngredient9, measure: strMeasure9 },
  ].filter((el) => el.ingredient);

  const handleNavigate = () => {
    if (navigationType === "POP") {
      navigate("/");
    } else {
      navigate(-1);
    }
  };

  if (isFetching) {
    return (
      <Card>
        <span className="loading loading-bars w-40 block mx-auto"></span>
      </Card>
    );
  }

  if (!strDrink) {
    return (
      <Card>
        <div className="flex flex-col items-center space-y-4">
          <h3 className="text-center">Sorry, {drink} is not available here.</h3>
          <img className="w-60" src={BottleImg} alt="bottle" />
          <button className="btn btn-primary" onClick={handleNavigate}>
            Back
          </button>
        </div>
      </Card>
    );
  }

  return (
    <Card>
      <div className="flex flex-col items-center space-y-4">
        <h3 className="text-center">{strDrink}</h3>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <img
            className="w-40 mask mask-squircle"
            src={strDrinkThumb}
            alt={strDrink}
          />

          <div className="flex flex-col items-center space-y-2">
            {ingredients?.map((el, i) => (
              <div key={el.ingredient + i} className="join">
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

        <button className="btn btn-primary" onClick={handleNavigate}>
          Back
        </button>
      </div>
    </Card>
  );
};

export default InfoPage;
