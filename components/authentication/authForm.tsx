import {
  Box,
  Flex,
  Input,
  Button,
  Text,
  Divider,
  Radio,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { useSWRConfig } from "swr";
import NextImage from "next/image";
import { auth } from "../../lib/mutations";

const AuthForm: FC<{ mode: "signin" | "signup" }> = ({ mode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isCheckedRadio, setIsCheckedRadio] = useState("0");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const user = await auth(mode, { email, password });
    setIsLoading(false);
    router.push("/");
  };
  return (
    <Box height="100vh" width="100vw" bg="black" color="white">
      <Flex
        justify="center"
        align="center"
        height="100px"
        borderBottom="white 1px solid"
      >
        <NextImage src="/logo.svg" height={60} width={120} />
      </Flex>
      <Flex justify="center" align="center" direction="column">
        <Box marginTop="20px">To continue, login to Apple Music.</Box>
        <Box>Continue with PasswordLess Authentication</Box>
      </Flex>
      <Flex justify="center" marginTop="20px">
        <Divider orientation="horizontal" width="200px" />
        <Text marginTop="-12px">OR</Text>
        <Divider orientation="horizontal" width="200px" />
      </Flex>
      <Flex justify="center" align="center" marginTop="20px">
        <Box padding="50px" bg="gray.900" borderRadius="6px">
          <form onSubmit={handleSubmit}>
            <Text>Email address</Text>
            <Input
              placeholder="Email address"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              marginY="10px"
            />
            <Text>Password</Text>
            <Input
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              marginY="10px"
            />
            <Text>Forgot your password?</Text>
            <Radio value="1" colorScheme="green">
              Remember me
            </Radio>

            <Button
              width="100%"
              marginTop="10px"
              type="submit"
              bg="green.500"
              isLoading={isLoading}
              sx={{
                "&:hover": {
                  bg: "green.300",
                },
              }}
            >
              {mode}
            </Button>
          </form>
        </Box>
      </Flex>
      <Flex justify="center" marginTop="20px" direction="column" align="center">
        <Divider orientation="horizontal" width="400px" />
        <Text marginY="20px">Don&apos;t have an account?</Text>
        <Button
          variant="outline"
          width="300px"
          padding="20px"
          sx={{
            "&:hover": {
              bg: "green.300",
            },
          }}
        >
          Sign Up for Apple Music
        </Button>
      </Flex>
    </Box>
  );
};

export default AuthForm;
