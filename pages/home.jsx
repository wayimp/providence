import { TopBar } from '../components/TopBar'
import YouTube from 'react-youtube'
import { Box, Flex, HStack } from '@chakra-ui/react';
import NextImage from 'next/image'
import siteplan from '../public/siteplan.png'

export default function Home() {

  const opts = {
    width: '400',
    height: '225'
  }

  const onReady = event => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo()
  }

  return (
    <>
      <TopBar />

      <br />

      <Flex direction='column' align='center' w={'100%'} m='0 auto'>

        <HStack spacing={8} alignItems={'center'} ml={2} justifyContent={'space-between'}>
          <Box display='flex' alignItems='center'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12135.58806079407!2d-122.34366723022458!3d40.4996603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54d2eb861ffbacd7%3A0xc988a9a533d73cee!2sProvidence%20Riverland%20Farm!5e0!3m2!1sen!2sus!4v1686977330682!5m2!1sen!2sus" width="400" height="400" allowfullscreen={'true'} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </Box>
          <Box display='flex' alignItems='center'>

          </Box>
        </HStack>

        <Box display='flex' alignItems='center' m={5} >
          <NextImage src={siteplan} alt='siteplan' />
        </Box>

        <YouTube videoId={'90rW7HLD_DQ'} opts={opts} onReady={onReady} />

        <br />
      </Flex>
    </>
  )
}
