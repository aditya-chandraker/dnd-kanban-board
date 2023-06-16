import { DeleteIcon, ViewIcon } from '@chakra-ui/icons';
import {
  Box,
  IconButton,
  ScaleFade,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from '@chakra-ui/react';
import _ from 'lodash';
import { memo, useState } from 'react';
import { useTaskDragAndDrop } from '../../hooks/useTaskDragAndDrop';
import { TaskModel } from '../../utils/models';
import { AutoResizeTextarea } from './AutoResizeTextArea';

type TaskProps = {
  index: number;
  task: TaskModel;
  onUpdate: (id: TaskModel['id'], updatedTask: TaskModel) => void;
  onDelete: (id: TaskModel['id']) => void;
  onDropHover: (i: number, j: number) => void;
};

function Task({
  index,
  task,
  onUpdate: handleUpdate,
  onDelete: handleDelete,
  onDropHover: handleDropHover,
}: TaskProps) {
  const { ref, isDragging } = useTaskDragAndDrop<HTMLDivElement>(
    { task, index: index },
    handleDropHover,
  );

  const [showPreview, setShowPreview] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newTitle = e.target.value;
    handleUpdate(task.id, { ...task, title: newTitle });
  };

  const handleDeleteClick = () => {
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = () => {
    handleDelete(task.id);
    setShowDeleteModal(false);
  };

  const handleDeleteCancel = () => {
    setShowDeleteModal(false);
  };

  const handlePreviewClick = () => {
    setShowPreview(!showPreview);
  };

  return (
    <ScaleFade in={true} unmountOnExit>
      <Box
        ref={ref}
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
        bgColor={task.color}
        opacity={isDragging ? 0.5 : 1}
      >
        <IconButton
          position="absolute"
          top={0}
          right={0}
          zIndex={100}
          aria-label="delete-task"
          size="md"
          colorScheme="solid"
          color={'gray.700'}
          icon={<DeleteIcon />}
          opacity={0}
          _groupHover={{
            opacity: 1,
          }}
          onClick={handleDeleteClick}
        />
        <IconButton
          position="absolute"
          top={6}
          right={0}
          zIndex={100}
          aria-label="preview-task"
          size="md"
          colorScheme="solid"
          color={'gray.700'}
          icon={<ViewIcon />}
          opacity={0}
          _groupHover={{
            opacity: 1,
          }}
          onClick={handlePreviewClick}
        />
        <AutoResizeTextarea
          value={task.title}
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
          color="gray.700"
          opacity={showPreview ? 0.5 : 1}
          onChange={handleTitleChange}
        />
        <Modal isOpen={showDeleteModal} onClose={handleDeleteCancel}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Delete Task</ModalHeader>
            <ModalBody>Are you sure you want to delete this task?</ModalBody>
            <ModalFooter>
              <Button colorScheme="red" mr={3} onClick={handleDeleteConfirm}>
                Delete
              </Button>
              <Button variant="ghost" onClick={handleDeleteCancel}>
                Cancel
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </ScaleFade>
  );
}

export default memo(Task, (prev, next) => {
  if (
    _.isEqual(prev.task, next.task) &&
    _.isEqual(prev.index, next.index) &&
    prev.onDelete === next.onDelete &&
    prev.onDropHover === next.onDropHover &&
    prev.onUpdate === next.onUpdate
  ) {
    return true;
  }

  return false;
});