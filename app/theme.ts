import {extendTheme} from "@chakra-ui/react";
import {mode} from "@chakra-ui/theme-tools";
import {Dict} from "@chakra-ui/utils";

export const Input = {
    variants: {
        outline: (props: Dict) => ({
            field: {
                bg: mode('white', 'gray.800')(props),
                borderColor: 'gray.300',
                _placeholder: {
                    color: 'gray.400',
                },
            },
        }),
    },
}

const customTheme = extendTheme({
    styles: {
        global: {
            body: {
                bg: "white"
            }
        }
    },
    components: {
        Input
    }
})

export default customTheme;