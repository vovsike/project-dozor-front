'use server'

import {postAccounts} from "@/app/client";
import {registerForm} from "@/app/_utils/formTypes";
import {createClient} from "@hey-api/client-fetch";

export async function submitRegisterFormAction(formData: registerForm) {

    createClient({
        baseUrl: process.env.API_BASE
    })

    const res = await postAccounts(
        {
            body:
                {
                    ...formData
                }
        }
    )

    if (res.error) {
        console.error(res.error)
    }

    return res.data
}