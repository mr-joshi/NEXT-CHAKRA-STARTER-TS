import {Flex,useColorMode} from '@chakra-ui/react'
import Image from 'next/image' 
import MotionBox from './motion/Box';
const ImageSection=()=>{
    const {colorMode}=useColorMode();
    return(
        <>
        <MotionBox
        animate={{y:20 ,scale:0.97}} 
        transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
        marginY={8}
        maxWidth={[240, 320]}
        marginX="auto"
        >
            <Image 
            src='/hello.svg'
            width={500}
            height={500}
            alt="welcome"
            />
        </MotionBox>
        
        
        </>
    )
}
export default ImageSection