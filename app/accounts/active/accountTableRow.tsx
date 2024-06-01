import {AccountDTO} from "@/app/client";
import {Td, Tr} from "@chakra-ui/react";
import DeactivateAccountButton from "@/app/accounts/active/deactivateAccountButton";

type AccountTableRowProps = {
    accounts?: AccountDTO[]
}

export default function AccountTableRow({accounts}: AccountTableRowProps) {

    return accounts?.map(account =>
        <Tr key={account.id}>
            <Td>{account.userName}</Td>
            <Td>{account.email}</Td>
            <Td><DeactivateAccountButton id={account.id}/></Td>
        </Tr>
    )
}
