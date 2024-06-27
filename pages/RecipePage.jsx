import { RecipeItemCard } from "../components/ui/RecipeItemCard";

export const RecipePage = ({ item, clickFn }) => {
  return (
    <>
      <RecipeItemCard key={item.id} item={item} clickFn={clickFn} />
    </>
  );
};
