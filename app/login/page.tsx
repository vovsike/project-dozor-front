'use client'

import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    FormControl,
    FormLabel,
    Heading,
    Input, Stack
} from "@chakra-ui/react";
import {Link} from "@chakra-ui/next-js";
export default function LoginPage() {

    return(
        <Card bg="gray.50" w={"30em"}>
            <form>
                <CardHeader>
                    <Heading>Please Login</Heading>
                </CardHeader>
                <CardBody rowGap={"5px"}>
                    <Stack spacing={5}>
                        <FormControl>
                            <FormLabel>Username</FormLabel>
                            <Input placeholder={"Username"}></Input>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Password</FormLabel>
                            <Input placeholder={"Password"} type={"password"}></Input>
                        </FormControl>
                    </Stack>
                </CardBody>
                <CardFooter alignItems={"center"} flexDirection={"column"}>
                    <Button bg={"green.100"} color={"green"} w={"70%"}>Login</Button>
                    <Link py={"5px"} href={"/register"}>Or register an account</Link>
                </CardFooter>
            </form>
    </Card>
)
}