import { Container, HStack, Text, Link as ChakraLink, Sticky } from "@chakra-ui/react";
import { Link } from "react-router";
import { color } from "../../styles";
import { useEffect, useState } from "react";

const Navbar = ({ isBackground = true }: { isBackground?: boolean }) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const toggleScrolled = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', toggleScrolled)
    return () => {
      window.removeEventListener('scroll', toggleScrolled)
    }
  }, [])


  return (
    <Sticky transition={'all 0.3s ease-in-out'} shadow={isScrolled ? 'sm' : 'none'} backgroundColor={(isScrolled || isBackground) ? color.backgrounds.primary : 'transparent'} width={'100%'} zIndex={999}>
      <Container maxW={'7xl'}>
        <HStack justifyContent={'start'} width={'100%'} paddingBlock={5} gapX={10}>
          <Text fontSize={'2xl'} fontWeight={600} color={'#fff'}>SportZap</Text>
          <HStack as={'ul'} gapX={6}>
            <li>
              <ChakraLink color={'#fff'} asChild _hover={{ color: color.noirEclipse[50] }}>
                <Link to="/">Home</Link>
              </ChakraLink>
            </li>
            <li>
              <ChakraLink color={'#fff'} asChild _hover={{ color: color.noirEclipse[50] }}>
                <Link to="/schedule">Formula 1</Link>
              </ChakraLink>
            </li>
          </HStack>
        </HStack>
      </Container>
    </Sticky >
  );
}

export default Navbar;
