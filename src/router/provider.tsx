import { RouterProvider } from "react-router-dom";
import router from "./router.config";
import Layout from "./layout";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
export default function Provider() {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </ChakraProvider>
  );
}
