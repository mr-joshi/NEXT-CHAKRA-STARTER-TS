import { Box, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";
import ColorMode from './Colormode'


const Header = () => (
  <Flex as="header" width="full" align="center">
    <Heading as="h1" size="md">
      <Link href="/">nextchakra-starter</Link>
    </Heading>

    <Box marginLeft="auto">
      <ColorMode/>
    </Box>
  </Flex>
);

export default Header;