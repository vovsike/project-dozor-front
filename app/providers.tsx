'use client'

import React from "react";
import {ChakraProvider} from "@chakra-ui/react";
import customTheme from "@/app/theme";

export const Providers = ({children} : {children: React.ReactNode}) => {
    return (
        <ChakraProvider theme={customTheme}>
            {children}
        </ChakraProvider>
    )
}
