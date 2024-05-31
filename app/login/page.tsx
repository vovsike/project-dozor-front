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
    Input, Spinner
} from "@chakra-ui/react";
export default function LoginPage() {

    return(
        <Card bg="white" w={"50em"}>
            <form>
                <CardHeader>
                    <Heading>LoginForm</Heading>
                </CardHeader>
                <CardBody>
                    <FormControl>
                        <FormLabel>UserName</FormLabel>
                        <Input placeholder={"User name"}></Input>
                    </FormControl>
                    <FormControl>
                        <FormLabel>UserName</FormLabel>
                        <Input placeholder={"User name"}></Input>
                    </FormControl>
                </CardBody>
                <CardFooter>
                    <Button>Submit</Button>
                </CardFooter>
            </form>
    </Card>
)
}