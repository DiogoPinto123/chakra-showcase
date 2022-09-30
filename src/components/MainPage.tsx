import { Flex, Heading, Stack, Text, Link } from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";
import React from "react";

const MainPage = () => {
  return (
    <div>
      <Flex justify="center" h="100vh" p="30px">
        <Stack>
          <Heading as="h1" size="xl" noOfLines={1}>
            Welcome to my chakra demo!
          </Heading>
          <Text size="xl">
            Here you can test lots of Chakra UI functionalities!
          </Text>
          <span>
            <Link href="https://chakra-ui.com" color="yellow.600" isExternal>
              Click here <FaExternalLinkAlt />
            </Link>
            &nbsp;to learn more about Chakra.
          </span>
        </Stack>
      </Flex>
    </div>
  );
};

export default MainPage;
