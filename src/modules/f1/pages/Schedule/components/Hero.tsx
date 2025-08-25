import { Box, Text, Container, Button, VStack } from "@chakra-ui/react";
import { styles } from "./Hero.style";
import bgImage from '../../../assets/f1-car.jpg'
import { color } from "@/shared/styles";

const Hero = () => {
  return (
    <Box as={'section'} css={styles.page}>
      <img src={bgImage} style={styles.bgImage} />
      <Box
        position="absolute"
        inset={0}
        bgGradient={`linear-gradient(to bottom, ${color.royalNebula[500] + '4a'}, ${color.backgrounds.primary + 'c7'} 50%, ${color.backgrounds.primary})`}
        opacity={20}
        zIndex={10}
        pointerEvents="none"
      />
      <Container css={styles.headlineContainer} maxW={'7xl'}>
        <VStack alignItems={'start'}>
          <VStack alignItems={'start'}>
            <Text fontSize={'6xl'} fontWeight={700} color={'#fff'} textAlign={'left'}>One Dashboard.</Text>
            <Text fontSize={'6xl'} fontWeight={700} color={'#fff'} textAlign={'left'}>All F1 Metrics.</Text>
          </VStack>
          <Text fontSize={'2xl'} color={'#fff'} textAlign={'left'}>Explore comprehensive Formula 1 data and insights in one place.</Text>
          <Button marginTop={4} variant={'subtle'} width={'400px'} backgroundColor={color.royalNebula[400]}>Get Started</Button>
        </VStack>
      </Container>
    </Box>
  );
}

export default Hero;
