import { useState } from "react";
import { RecipeSearch } from "../components/ui/RecipeSearch";
import { RadioList } from "../components/ui/RadioList";
import { Box } from "@chakra-ui/react";
import { RadioButtonGroup } from "../components/ui/RadioInput";

export const RecipeListPage = ({ clickFn }) => {
  const options = [
    { value: "Vegetarian", label: "Vegetarian" },
    { value: "Vegan", label: "Vegan" },
    { value: "Pescatarian", label: "Pescatarian" },
  ];
  const [value, setValue] = useState("");
  const handleChange = (nextValue) => {
    setValue(nextValue);
  };
  return (
    <Box>
      <Box display="flex" alignItems="center" justifyContent="center">
        <RadioButtonGroup
          options={options}
          value={value}
          onChange={handleChange}
        />
      </Box>
      {value ? (
        <RadioList clickFn={clickFn} value={value}></RadioList>
      ) : (
        <RecipeSearch clickFn={clickFn}></RecipeSearch>
      )}
    </Box>
  );
};
