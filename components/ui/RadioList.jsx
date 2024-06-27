import { data } from "../../utils/data";
import { RecipeList } from "./RecipeList";

export const RadioList = ({ clickFn, value }) => {
  const matchedRecipes = data.hits.filter(({ recipe }) => {
    return recipe.healthLabels.includes(value);
  });

  return (
    <>
      <RecipeList items={matchedRecipes} clickFn={clickFn}></RecipeList>
    </>
  );
};
