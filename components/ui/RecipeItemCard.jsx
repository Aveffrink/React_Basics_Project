import {
  Card,
  CardBody,
  Image,
  Heading,
  Text,
  Stack,
  Tag,
  TagLabel,
  Wrap,
  Button,
  Center,
} from "@chakra-ui/react";

export const RecipeItemCard = ({ item, clickFn }) => {
  return (
    <>
      <Center>
        <Card
          width={{ base: "20rem", md: "80vw" }}
          backgroundColor="blue.50"
          margin="1rem"
        >
          <CardBody>
            <Image
              src={item.recipe.image}
              borderRadius="lg"
              width="100%"
              height={{ base: "10rem", md: "25rem" }}
              objectFit="cover"
            />
            <Stack direction={{ base: "column", md: "row" }}>
              <Stack
                direction="column"
                mt="6"
                spacing="2"
                align={{ base: "center", md: "flex-start" }}
                width={{ md: "50%" }}
              >
                <Tag
                  key={item.recipe.mealType}
                  variant="outline"
                  colorScheme="grey"
                  maxW="full"
                >
                  <TagLabel whiteSpace="normal">
                    {item.recipe.mealType}
                  </TagLabel>
                </Tag>
                <Heading size="md" textAlign={{ base: "center", md: "left" }}>
                  {item.recipe.label}
                </Heading>
                <Text>Dish: {item.recipe.dishType}</Text>
                <Tag color="grey.100" maxW="full">
                  <TagLabel whiteSpace="normal">
                    Total cooking time: {item.recipe.totalTime} minutes
                  </TagLabel>
                </Tag>
                <Tag color="grey.100" maxW="full">
                  <TagLabel whiteSpace="normal">
                    Servings: {item.recipe.yield}
                  </TagLabel>
                </Tag>
                <Text>Ingredients:</Text>

                {item.recipe.ingredientLines.map((ingredient) => (
                  <>
                    <Text align={{ base: "center", md: "left" }}>
                      {ingredient}
                    </Text>
                  </>
                ))}
              </Stack>
              <Stack
                direction="column"
                mt="6"
                spacing="2"
                align={{ base: "center", md: "flex-start" }}
                width={{ md: "50%" }}
              >
                <Text color="green.500" marginTop={{ md: "1rem" }}>
                  Health Labels:
                </Text>
                <Wrap spacing={3} justify={{ base: "center", md: "left" }}>
                  {item.recipe.healthLabels.map((label) => (
                    <Tag key={label} color="green.500" maxW="full">
                      <TagLabel whiteSpace="normal">{label}</TagLabel>
                    </Tag>
                  ))}
                </Wrap>

                <Text color="purple.500">Diet:</Text>
                <Wrap spacing={3} justify="center">
                  {item.recipe.dietLabels.map((label) => (
                    <Tag key={label} color="purple.500" maxW="full">
                      <TagLabel whiteSpace="normal">{label}</TagLabel>
                    </Tag>
                  ))}
                </Wrap>

                {item.recipe.cautions[0] && (
                  <>
                    <Text color="orange.500" align="center">
                      Cautions:
                    </Text>
                    <Wrap spacing={3} justify="center">
                      {item.recipe.cautions.map((caution) => (
                        <Tag
                          key={caution}
                          variant="outline"
                          colorScheme="orange"
                          maxW="full"
                        >
                          <TagLabel whiteSpace="normal">{caution}</TagLabel>
                        </Tag>
                      ))}
                    </Wrap>
                  </>
                )}
                <Text>Total nutrients:</Text>
                <Text>
                  Energy:{" "}
                  {item.recipe.totalNutrients.ENERC_KCAL.quantity.toFixed(0)}{" "}
                  kcal
                </Text>
                <Text>
                  Carbs: {item.recipe.totalNutrients.CHOCDF.quantity.toFixed(0)}{" "}
                  g
                </Text>
                <Text>
                  Protein:{" "}
                  {item.recipe.totalNutrients.PROCNT.quantity.toFixed(0)} g
                </Text>
                <Text>
                  Fat: {item.recipe.totalNutrients.FAT.quantity.toFixed(0)} g
                </Text>
                <Text>
                  Cholesterol:{" "}
                  {item.recipe.totalNutrients.CHOLE.quantity.toFixed(0)} mg
                </Text>
                <Text>
                  Sodium: {item.recipe.totalNutrients.NA.quantity.toFixed(0)} mg
                </Text>
              </Stack>
            </Stack>
          </CardBody>
        </Card>
      </Center>
      <Center>
        <Button
          color="purple.50"
          backgroundColor="purple.500"
          width="6rem"
          onClick={() => clickFn("")}
          _hover={{
            background: "purple.700",
          }}
        >
          Back
        </Button>
      </Center>
    </>
  );
};
