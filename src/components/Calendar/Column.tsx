import { AddIcon } from '@chakra-ui/icons';
import {
  Badge,
  Box,
  Heading,
  IconButton,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import useColumnDrop from '../../hooks/useColumnDrop';
import useColumnTasks from '../../hooks/useColumnTasks';
import { ColumnType } from '../../utils/enums';
import Task from './Task';

const ColumnColorScheme: Record<ColumnType, string> = {
  Monday: 'gray',
  Tuesday: 'blue',
  Wednesday: 'red',
  Thursday: 'green',
  Friday: 'purple',
  Saturday: 'pink',
  Sunday: 'orange',
};

function Column({ column }: { column: ColumnType }) {
  const {
    tasks,
    addEmptyTask,
    deleteTask,
    dropTaskFrom,
    swapTasks,
    updateTask,
  } = useColumnTasks(column);

  const { dropRef, isOver } = useColumnDrop(column, dropTaskFrom);

  const ColumnTasks = tasks.map((task, index) => (
    <Task
      key={task.id}
      task={task}
      index={index}
      onDropHover={swapTasks}
      onUpdate={updateTask}
      onDelete={deleteTask}
    />
  ));

  return (
    <Box>
      <Heading fontSize="md" mb={0} letterSpacing="wide">
        <Badge
          px={2}
          py={1}
          rounded="lg"
          colorScheme={ColumnColorScheme[column]}
        >
          {column}
        </Badge>
        <IconButton
          size="xs"
          w="7"
          ml={2}
          color={useColorModeValue('gray.500', 'gray.400')}
          bgColor={useColorModeValue('gray.100', 'gray.700')}
          _hover={{ bgColor: useColorModeValue('gray.200', 'gray.600') }}
          py={2}
          float="right"
          variant="solid"
          onClick={addEmptyTask}
          colorScheme="black"
          aria-label="add-task"
          icon={<AddIcon />}
        />
      </Heading>

      <Stack
        ref={dropRef}
        direction={{ base: 'row', md: 'column' }}
        h={{ base: 200, md: 450 }}
        p={2}
        mt={2}
        spacing={2}
        bgColor={useColorModeValue('gray.50', 'gray.900')}
        rounded="lg"
        boxShadow="md"
        overflow="auto"
        opacity={isOver ? 0.85 : 1}
      >
        {ColumnTasks}
      </Stack>
    </Box>
  );
}

export default Column;
