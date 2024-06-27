import { Radio, RadioGroup, Stack } from "@chakra-ui/react";

export const RadioButtonGroup = ({ options, value, onChange }) => {
  return (
    <RadioGroup onChange={onChange} value={value} color="green.700">
      <Stack direction="row">
        {options.map((option) => (
          <Radio
            key={option.value}
            value={option.value}
            colorScheme="green"
            padding="1rem"
          >
            {option.label}
          </Radio>
        ))}
      </Stack>
    </RadioGroup>
  );
};
