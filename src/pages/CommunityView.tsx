import { Avatar, Badge, Box, Flex, Heading, ScaleFade, Stack, Text, Image, useColorModeValue } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { AutoResizeTextarea } from '../components/Calendar/AutoResizeTextArea';

interface Task {
  id: number;
  name: string;
  color: string;
}

interface Level {
  id: number;
  name: string;
  tasks: Task[];
}

export default function CommunityView() {
  const { communityName } = useParams<{ communityName: string }>();

  const levels: Level[] = [
    {
      id: 1,
      name: 'Level 1',
      tasks: [
        { id: 1, name: 'Task 1 \n\nThis type of task requires picture proof \n\n1000pts', color: 'red' },
        { id: 2, name: 'Task 2 \n\n2pts', color: 'green' },
        { id: 3, name: 'Task 3 \n\n10pts', color: 'orange' },
      ],
    },
    {
      id: 2,
      name: 'Level 2',
      tasks: [
        { id: 4, name: 'Task 4', color: 'red' },
        { id: 5, name: 'Task 5 \n\n5pts', color: 'yellow' },
        { id: 6, name: 'Task 6', color: 'orange' },
        { id: 6, name: 'Task 7', color: 'orange' },
      ],
    },
    {
      id: 3,
      name: 'Level 3',
      tasks: [
        { id: 4, name: 'Task 4', color: 'red' },
        { id: 5, name: 'Task 5 \n\n(you can only go up a level if you have completed one from that level)', color: 'yellow' },
      ],
    },
    {
      id: 3,
      name: 'Completed',
      tasks: [
        { id: 4, name: 'get some points for being a completist', color: 'white' },
      ],
    },
  ];



  return (
    <Box mt="65px" ml="5vw" mr={"5vw"}>
      <Stack direction="row" spacing={1} bgColor={useColorModeValue('gray.50', 'gray.900')} rounded="lg" boxShadow="md" overflow="auto">
        <Image src='https://w7.pngwing.com/pngs/58/62/png-transparent-ninjump-dlx-endless-ninja-fun-ninjump-rooftops-paper-toss-backflip-studios-android-blue-game-shoe-thumbnail.png' boxSize={"300px"}/>
        {levels.map((level) => (
          <Box key={level.id} bg={useColorModeValue("gray.200","gray.700")} p={3}>
            <Badge fontSize="sm" color="gray.500">
              {level.name}
            </Badge>
            {level.tasks.map((task) => (
              <Box key={task.id} mt="2">
                <ScaleFade in={true} unmountOnExit>
                  <Box
                    as="div"
                    role="group"
                    position="relative"
                    rounded="lg"
                    w={126}
                    pl={2}
                    pr={7}
                    pt={2}
                    pb={1}
                    boxShadow="xl"
                    cursor="grab"
                    fontWeight="bold"
                    userSelect="none"
                    color={task.color + ".700"}
                    bgColor={task.color + ".300"}
                  >
                    <AutoResizeTextarea
                      value={task.name}
                      fontWeight="semibold"
                      //cursor="inherit"
                      border="none"
                      p={0}
                      fontSize="10px"
                      overflow="hidden"
                      resize="none"
                      minH={10}
                      maxH={200}
                      focusBorderColor="none"
                      // color="gray.700"
                    />

                  </Box>
                </ScaleFade>

                {/* Render the task content here */}
              </Box>
            ))}
          </Box>
        ))}
      </Stack>
      <Heading size="lg" mt={4}>{communityName}</Heading>
      <Flex>
        <Flex direction="column" alignItems="center">
          <Avatar src="./logo.png" m="2" />
          <Text fontSize="xs" color="gray.500">
            Adi
          </Text>
          <Text fontSize="xx-small" color="gray.500">
            Admin
          </Text>
        </Flex>
        <Flex direction="column" alignItems="center">
          <Avatar name="Jane Doe" src="https://bit.ly/sage-adebayo" m="2" />
          <Text fontSize="xs" color="gray.500">
            Jane Doe
          </Text>
        </Flex>
        <Flex direction="column" alignItems="center">
          <Avatar name="Bob Smith" src="https://bit.ly/broken-link" m="2" />
          <Text fontSize="xs" color="gray.500">
            Bob Smith
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}