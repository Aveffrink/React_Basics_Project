import { Box, Input } from "@chakra-ui/react";

export const TextInput = ({ changeFn }) => {
  return (
    <Box align="center" padding="1rem">
      <label>
        Search for a recipe or health label:{" "}
        <Input
          background="blue.50"
          width={{ base: "10rem", sm: "20rem" }}
          margin="1rem"
          onChange={changeFn}
        />
      </label>
    </Box>
  );
};
