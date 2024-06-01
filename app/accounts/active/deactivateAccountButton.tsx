'use client'

import {Button, Flex} from "@chakra-ui/react";
import {deactivateAccountAction} from "@/app/accounts/active/deactivateAccount";
import {useRouter} from "next/navigation";

type deactivateAccountButtonProps = {
    id?: number;
}

export default function DeactivateAccountButton({id}: deactivateAccountButtonProps) {

    const router = useRouter();

    function deactivateAccount() {
        if (id) {
            deactivateAccountAction(id).then(data => {
                router.refresh()
            });
        }
    }

    return (
            <Button colorScheme={"red"} size={"xs"} onClick={deactivateAccount}>Deactivate account</Button>
        )
}