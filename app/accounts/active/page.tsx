import {Table, TableContainer, Tbody, Th, Thead, Tr} from "@chakra-ui/react";
import {getAccountsActive} from "@/app/client";
import AccountTableRow from "@/app/accounts/active/accountTableRow";
import {cookies} from "next/headers";

export default async function activeAccounts () {

    const clientCookies = cookies()

    const accounts = await getAccountsActive();

    return (
        <TableContainer>
            <Table>
                <Thead>
                    <Tr>
                        <Th>User name</Th>
                        <Th>Email</Th>
                        <Th>Action</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <AccountTableRow accounts={accounts.data} />
                </Tbody>
            </Table>
        </TableContainer>
    );
}