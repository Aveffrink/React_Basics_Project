import { Box, Heading, Text } from "@chakra-ui/react";

const header = "Winc Academy Restaurant";
const slogan = "Because coding is hungry work!";

export const Header = () => {
  return (
    <>
      <Box background="purple.700">
        <Heading color="purple.50" padding="1rem" align="center">
          {header}
        </Heading>
        <Text
          fontSize="xl"
          color="purple.50"
          paddingBottom="1rem"
          align="center"
        >
          {slogan}
        </Text>
      </Box>
    </>
  );
};
