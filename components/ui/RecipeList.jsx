import { Box } from "@chakra-ui/react";
import { RecipeListItemCard } from "./RecipeListItemCard";

export const RecipeList = ({ items, clickFn }) => {
  return (
    <>
      <Box display="flex" flexWrap="wrap" justifyContent="space-evenly">
        {items.map((item) => (
          <RecipeListItemCard key={item.label} item={item} clickFn={clickFn} />
        ))}
      </Box>
    </>
  );
};
