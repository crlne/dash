import { Text } from "@chakra-ui/react";

export default function Logo() {
    return (
        <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
                Dash
                <Text as="span" ml="1" color="purple.500">.</Text>
            </Text>
    );
}