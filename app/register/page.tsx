'use client'

import {Button} from "@chakra-ui/react";
import {useRouter} from "next/navigation";
import {Suspense} from "react";

export default function RegisterPage() {

    const router = useRouter();

    return (
        <Suspense fallback={<h2></h2>}>
            <Button onClick={() => {router.push("/login")}}>To login page </Button>
        </Suspense>
    )
}