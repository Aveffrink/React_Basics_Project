import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { RecipePage } from "./pages/RecipePage";
import { RecipeSearch } from "./components/ui/RecipeSearch";
import { Header } from "./components/Header";

export const App = () => {
  const [selectedItem, setSelectedItem] = useState();
  return (
    <>
      <Header></Header>
      <Box background="blue.100" paddingBottom="2rem">
        {selectedItem ? (
          <RecipePage item={selectedItem} clickFn={setSelectedItem} />
        ) : (
          <>
            <RecipeSearch clickFn={setSelectedItem} />
          </>
        )}
      </Box>
    </>
  );
};
