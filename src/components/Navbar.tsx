import { Flex, Link, Button } from "@chakra-ui/react";

import React from "react";

const Navbar = () => {
  return (
    <Flex bgColor="green.500" p="20px">
      <Link>
        <Button>Layout</Button>
      </Link>
      <Link>
        <Button>Forms</Button>
      </Link>
      <Link>
        <Button>Data Display</Button>
      </Link>
      <Link>
        <Button>Feedback</Button>
      </Link>
      <Link>
        <Button>Typography</Button>
      </Link>
      <Link>
        <Button>Overlay</Button>
      </Link>
      <Link>
        <Button>Disclosure</Button>
      </Link>
    </Flex>
  );
};

export default Navbar;
