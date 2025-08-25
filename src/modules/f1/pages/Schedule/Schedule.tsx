import { Container, HStack, Text, VStack } from '@chakra-ui/react';

import { ScheduleGrid } from './components/ScheduleGrid';
import { styles } from './Schedule.style';
import ScheduleFilterYear from './components/ScheduleFilterYear';
import { ScheduleYearProvider } from './context/ScheduleYearContext';
import Navbar from '@/shared/components/navbar/Navbar';
import ScheduleSearch from './components/ScheduleSearch';
import Hero from './components/Hero';

export const Schedule = () => {
  return (
    <VStack style={styles.page} gap={0}>
      <Navbar isBackground={false} />
      <Hero />
      <Container maxW={'7xl'} paddingBlockEnd={20} paddingBlockStart={20}>
        <ScheduleYearProvider>
          <VStack spaceY={6} alignItems={'start'}>
            <Text fontSize={'4xl'} fontWeight={700} color={'#fff'}>Formula 1 Schedule</Text>
            <HStack gapX={6}>
              <ScheduleFilterYear />
              <ScheduleSearch />
            </HStack>
            <ScheduleGrid />
          </VStack>
        </ScheduleYearProvider>
      </Container>
    </VStack>
  )
}
