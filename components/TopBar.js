import { ReactNode } from 'react';
import Head from 'next/head'
import {
    Box,
    Flex,
    Avatar,
    HStack,
    Link,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    Spacer,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import NextImage from 'next/image'
import providence from '../public/providence.png'
import riverland from '../public/riverland.png'

const Links = ['Home', 'Sponsor', 'Contact'];

const NavLink = ({ children }) => (
    <Link
        color={useColorModeValue('0f733b')}
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            color: useColorModeValue('white'),
            bg: useColorModeValue('#0f733b'),
        }}
        href={`${children}`.toLowerCase()}>
        {children}
    </Link>
);

export function TopBar() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Head>
                <title>Providence Riverland Farm</title>
                <meta
                    name='description'
                    content='Agritourism Park'
                />
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width" />
                <meta name="theme-color" content="#0f733b" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="keywords" content="neutraceuticals, natural supplements, Vitarunner, boost health, improve health" />
                <meta property="og:title" content="Providence Riverland Farm" />
                <meta property="og:type" content="website" />
                <meta property="og:description" content="Agritourism Park" />
                <meta property='og:image' content='/logo.png' />
            </Head>
            <Box bg={useColorModeValue('white')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />

                    <HStack spacing={8} alignItems={'center'} ml={2}>
                        <Box display='flex' alignItems='center'>
                            <NextImage src={providence} alt='logo' height={50} />
                        </Box>
                        <Box display='flex' alignItems='center'>
                            <NextImage src={riverland} alt='riverland' height={50} />
                        </Box>
                    </HStack>

                    <HStack spacing={8} alignItems={'center'}>
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}>
                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                        </HStack>
                    </HStack>
                </Flex>
                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
}