import { useState } from "react";
import { TextInput } from "./TextInput";
import { data } from "../../utils/data";
import { RecipeList } from "./RecipeList";

export const RecipeSearch = ({ clickFn }) => {
  const [searchField, setSearchField] = useState("");
  const handleChange = (event) => setSearchField(event.target.value);

  const matchedRecipes = data.hits.filter(({ recipe }) => {
    const searchFieldLower = searchField.toLowerCase();
    const containsPartialMatch1 = recipe.label
      .toLowerCase()
      .includes(searchFieldLower);
    const containsPartialMatch2 = recipe.healthLabels.some((label) =>
      label.toLowerCase().includes(searchFieldLower)
    );

    return containsPartialMatch1 || containsPartialMatch2;
  });

  return (
    <>
      <TextInput changeFn={handleChange} />
      <RecipeList items={matchedRecipes} clickFn={clickFn} />
    </>
  );
};

/*
const matchedRecipes = data.hits.filter(({ recipe }) => {
    return recipe.label.toLowerCase().includes(searchField.toLowerCase());
  });
*/

/*
const matchedRecipes = data.hits.filter(({ recipe }) => {
  const searchFieldLower = searchField.toLowerCase();
  const containsPartialMatch1 = recipe.label.toLowerCase().includes(searchFieldLower);
  const containsPartialMatch2 = recipe.healthLabels.some(label => label.toLowerCase().includes(searchFieldLower));

  return containsPartialMatch1 || containsPartialMatch2;
});
*/
