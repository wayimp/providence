import { TopBar } from '../components/TopBar'
import Plans from '../components/Plans'

import { Flex } from '@chakra-ui/react';

export default function Contact() {
    return (
        <>
            <TopBar />

            <Flex direction='column' align='center' minW={'100vw'} minH={'100vh'} m='0 auto'>

                <Plans />

            </Flex>
        </>
    )
}
