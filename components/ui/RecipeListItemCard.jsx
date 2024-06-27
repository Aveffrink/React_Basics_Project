import {
  Card,
  CardBody,
  Image,
  Heading,
  Text,
  VStack,
  Tag,
  TagLabel,
  Wrap,
} from "@chakra-ui/react";

export const RecipeListItemCard = ({ item, clickFn }) => {
  return (
    <Card
      width="20rem"
      backgroundColor="blue.50"
      margin="1rem"
      onClick={() => clickFn(item)}
    >
      <CardBody>
        <Image
          src={item.recipe.image}
          borderRadius="lg"
          width="100%"
          height="10rem"
          objectFit="cover"
        />
        <VStack mt="6" spacing="2">
          <Tag
            key={item.recipe.mealType}
            variant="outline"
            colorScheme="grey"
            maxW="full"
          >
            <TagLabel whiteSpace="normal">{item.recipe.mealType}</TagLabel>
          </Tag>
          <Heading size="md" align="center">
            {item.recipe.label}
          </Heading>
          {item.recipe.healthLabels.includes("Vegan") && (
            <>
              <Tag color="green.500" maxW="full">
                <TagLabel whiteSpace="normal">Vegan</TagLabel>
              </Tag>
            </>
          )}
          {item.recipe.healthLabels.includes("Vegetarian") && (
            <>
              <Tag color="green.500" maxW="full">
                <TagLabel whiteSpace="normal">Vegetarian</TagLabel>
              </Tag>
            </>
          )}
          <Wrap spacing={3} justify="center">
            {item.recipe.dietLabels.map((label) => (
              <Tag key={label} color="purple.500" maxW="full">
                <TagLabel whiteSpace="normal">{label}</TagLabel>
              </Tag>
            ))}
          </Wrap>

          <Text>Dish: {item.recipe.dishType}</Text>

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
        </VStack>
      </CardBody>
    </Card>
  );
};
