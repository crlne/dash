//pasta para config cores, fontes...do chakra, extende theme utilizando as coisas que ele já tem e substitui estilos
import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    styles: {
        global: {
            body: {
                bg: 'gray.900',
                color: 'gray.50'
            }
        }
    }
})

