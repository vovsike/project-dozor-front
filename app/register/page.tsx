'use client'

import {Box, Button, FormControl, FormLabel, Input, Stack} from "@chakra-ui/react";
import {useForm} from "react-hook-form";
import {submitRegisterFormAction} from "@/app/register/registerFormScripts";
import {registerForm} from "@/app/_utils/formTypes";
import {useRouter} from "next/navigation";

export default function RegisterPage() {

    const router = useRouter()
    const onSubmit = (values: registerForm) => {
        submitRegisterFormAction(values).then((res) => {
            router.push("/accounts/active")
        })
    }

    const {register, handleSubmit} = useForm<registerForm>()

    return (
        <Box shadow="lg" borderRadius="lg" borderWidth="1px" borderColor="gray.300">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack p={"10px"}>
                    <FormControl>
                        <FormLabel>Username</FormLabel>
                        <Input {...register("userName" , {required: true})} placeholder={"Username"}/>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input {...register("email", {required: true})} placeholder={"Email"}/>
                    </FormControl>
                    <Button colorScheme={"green"} type={"submit"}>Create </Button>
                </Stack>
            </form>
        </Box>
    )
}