import { Container, SimpleGrid } from '@chakra-ui/react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Column from '../components/Column';
import DarkModeIconButton from '../components/DarkModeIconButton';
import { ColumnType } from '../utils/enums';

type CalendarProps = {
  startDate: Date;
};

const getColumns = (startDate: Date) => {
  const days = [
    ColumnType.SUNDAY,
    ColumnType.MONDAY,
    ColumnType.TUESDAY,
    ColumnType.WEDNESDAY,
    ColumnType.THURSDAY,
    ColumnType.FRIDAY,
    ColumnType.SATURDAY,
  ];

  const startDay = startDate.getDay();
  const reorderedDays = [...days.slice(startDay), ...days.slice(0, startDay)];

  return reorderedDays.map((day, index) => {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + index);
    return <Column column={day} />;
  });
};

function Calendar({ startDate }: CalendarProps) {
  const columns = getColumns(startDate);
  return (
    <main>
      <DarkModeIconButton position="absolute" top={2} right={2} />
      <DndProvider backend={HTML5Backend}>
        <Container maxWidth="container.lg" px={4} py={10}>
          <SimpleGrid columns={{ base: 1, md: 7 }} spacing={{ base: 16, md: 2 }}>
            {columns}
          </SimpleGrid>
        </Container>
      </DndProvider>
    </main>
  );
}

export default Calendar;