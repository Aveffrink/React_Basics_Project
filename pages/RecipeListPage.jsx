import { RecipeList } from "../components/ui/RecipeList";

export const RecipeListPage = ({ items, clickFn }) => {
  return <RecipeList items={items} clickFn={clickFn}></RecipeList>;
};
