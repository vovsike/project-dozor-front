'use server'

import {patchAccountsById} from "@/app/client";
import {client, createClient} from "@hey-api/client-fetch";

export async function deactivateAccountAction(id: number) {

    createClient({
        baseUrl:"http://localhost:8080"
    })

    console.log("baseUrl is: ", client.getConfig().baseUrl)

    const res=  await patchAccountsById({
        headers: {
            "content-type": 'application/merge-patch+json'
        },
        body: {
            active: false
        },
        path: {
            id: id
        }
    })

    return res.data
}