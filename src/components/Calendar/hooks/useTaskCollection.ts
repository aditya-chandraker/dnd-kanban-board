import { useLocalStorage } from 'usehooks-ts';

import { v4 as uuidv4 } from 'uuid';
import { ColumnType } from '../utils/enums';
import { TaskModel } from '../utils/models';

function useTaskCollection() {
  return useLocalStorage<{
    [key in ColumnType]: TaskModel[];
  }>('tasks', {
    Monday: [
      {
        id: uuidv4(),
        column: ColumnType.MONDAY,
        title: 'Task 1',
        color: 'blue.300',
      },
    ],
    Tuesday: [
      {
        id: uuidv4(),
        column: ColumnType.TUESDAY,
        title: 'Task 2',
        color: 'yellow.300',
      },
    ],
    Wednesday: [
      {
        id: uuidv4(),
        column: ColumnType.WEDNESDAY,
        title: 'Task 3',
        color: 'red.300',
      },
    ],
    Thursday: [
      {
        id: uuidv4(),
        column: ColumnType.THURSDAY,
        title: 'Task 4',
        color: 'green.300',
      },
    ],
    Friday: [
      {
        id: uuidv4(),
        column: ColumnType.FRIDAY,
        title: 'Task 4',
        color: 'green.300',
      },
    ],
    Saturday: [
      {
        id: uuidv4(),
        column: ColumnType.SATURDAY,
        title: 'Task 4',
        color: 'green.300',
      },
    ],
    Sunday: [
      {
        id: uuidv4(),
        column: ColumnType.SUNDAY,
        title: 'Task 4',
        color: 'green.300',
      },
    ],
  });
}

export default useTaskCollection;
