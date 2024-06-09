'use server'

import {PersonDTO, postAccounts, postPersons} from "@/app/client";
import {registerForm} from "@/app/_utils/formTypes";
import {createClient} from "@hey-api/client-fetch";

export async function submitRegisterFormAction(formData: registerForm) {

    createClient({
        baseUrl: process.env.API_BASE
    })

    const res = await postAccounts(
        {
            body:
                {...formData}})
    if (res.error) {
        console.error(res.error)}

    return res.data
}

export async function  submitSetupAccount(formData: PersonDTO) {
    createClient({
        baseUrl: process.env.API_BASE
    })

    const res = await postPersons({
        body: formData
    })
    if (res.error) {
        console.log(res.error)
    }

    return res.data
}