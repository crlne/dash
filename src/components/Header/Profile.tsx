import { Avatar } from "@chakra-ui/avatar";
import { Box, Flex, Text } from "@chakra-ui/layout";


interface ProfileProps {
    showProfileData?: boolean;
}

export default function Profile({ showProfileData =  true }: ProfileProps) {
    return (
        <Flex align="center">
            { showProfileData && (
                <Box mr="4" textAlign="right">
                <Text>Caroline Ferreira</Text>
                <Text clor="gray.300" fontSize="small">carol.lages@outlook.com</Text>
            </Box>
            )}

        <Avatar size="md" nome="Caroline Ferreira" src="http://github.com/crlne.png" />
    </Flex>
    );
}