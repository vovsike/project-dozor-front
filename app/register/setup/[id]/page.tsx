'use client'

import {Button, Card, FormControl, FormLabel, Heading, Input, Select, Stack} from "@chakra-ui/react";
import {useForm} from "react-hook-form";
import {PersonDTO} from "@/app/client";
import {submitSetupAccount} from "@/app/register/registerFormScripts";
import {useRouter} from "next/navigation";

export default function AccountSetupForm({params} : {params: {id: number}}) {

    const router = useRouter()

    const accountId = params.id;

    const onSubmit = (data: PersonDTO) => {
        data.accountId = accountId
        submitSetupAccount(data).then(res => {
            router.push("/login")
        })
    }

    const {register, handleSubmit} = useForm<PersonDTO>()

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Card bg={"blackAlpha.100"}>
                <Stack p ={10}>
                    <Heading size={"lg"}>Setup your account</Heading>
                    <FormControl>
                        <FormLabel>Person type</FormLabel>
                        <Select placeholder={"Select a value"} {...register("type")} defaultValue={"STUDENT"}>
                            <option key={"STUDENT"} value={"STUDENT"}>Student</option>
                            <option key={"TEACHER"} value={"TEACHER"}>Teacher</option>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <FormLabel>First Name</FormLabel>
                        <Input placeholder={"First name"} {...register("name.firstName")}></Input>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Last Name</FormLabel>
                        <Input placeholder={"Last name"} {...register("name.lastName")}></Input>
                    </FormControl>
                    <Button colorScheme={"green"} type={"submit"}>Submit</Button>
                </Stack>
            </Card>
        </form>
    )
}