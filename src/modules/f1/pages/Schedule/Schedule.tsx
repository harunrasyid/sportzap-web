import { Container, VStack } from '@chakra-ui/react';

import { ScheduleGrid } from './components/ScheduleGrid';
import { styles } from './Schedule.style';

export const Schedule = () => {
  return (
    <VStack style={styles.page}>
      <Container maxW={'5xl'} paddingBlockStart={20}>
        <ScheduleGrid />
      </Container>
    </VStack>
  )
}
