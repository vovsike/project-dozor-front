import {Table, TableContainer, Tbody, Th, Thead, Tr} from "@chakra-ui/react";
import {getAccountsActive} from "@/app/client";
import AccountTableRow from "@/app/accounts/active/accountTableRow";
import NextLink from 'next/link'
import { Link } from '@chakra-ui/react'

export default async function activeAccounts () {

    const accounts = await getAccountsActive();

    return (
        <>
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
            <Link p={"5px"} as={NextLink} href={"/register"} >Or register an account</Link>

        </>

    );
}