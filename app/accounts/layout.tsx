import {ReactNode} from "react";
import {Card} from "@chakra-ui/react";

export default async function AccountLayout ({children} : Readonly<{children: ReactNode}>) {
    return (
        <Card>
            {children}
        </Card>
    )
}