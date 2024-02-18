import { Center } from "@chakra-ui/react";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Center as="main" flexDirection="column" h="100vh" w="100vw">
      {children}
    </Center>
  );
}
