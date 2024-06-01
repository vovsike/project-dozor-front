import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {Providers} from "@/app/providers";
import { Grid, GridItem} from "@chakra-ui/react";
import {createClient} from "@hey-api/client-fetch";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

createClient({
    baseUrl:"http://localhost:8080"
})

export default async function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="en">
            <body>
                <Providers>
                    <Grid templateAreas={`
                    "header header header"
                    ". main ."
                    "footer footer footer"`}
                          gridTemplateRows={"64px 1fr 30px"} gridTemplateColumns={"1fr minmax(200px, 1400px) 1fr"} h={"100vh"}>
                        <GridItem  area={"header"} borderBottom={"2px solid"} borderColor={"blackAlpha.200"}>
                            Header
                        </GridItem>
                        <GridItem area={"main"} display={"flex"} alignItems="center" justifyContent="center">
                            {children}
                        </GridItem>
                        <GridItem area={"footer"}>
                            Footer
                        </GridItem>
                    </Grid>
                </Providers>
            </body>
        </html>
    );
}
