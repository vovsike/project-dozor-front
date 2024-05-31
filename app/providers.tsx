'use client'

import React from "react";
import {ChakraProvider, extendTheme} from "@chakra-ui/react";

const theme = extendTheme({
    styles: {
        global: {
            body :{
                bg: "cyan.100"
            }
        }
    }
})

export const Providers = ({children} : {children: React.ReactNode}) => {
    return (
        <ChakraProvider theme={theme}>
            {children}
        </ChakraProvider>
    )
}
