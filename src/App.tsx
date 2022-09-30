import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";

import MainPage from "./components/MainPage";
import Navbar from "./components/Navbar";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Navbar />
    <MainPage />
  </ChakraProvider>
);
