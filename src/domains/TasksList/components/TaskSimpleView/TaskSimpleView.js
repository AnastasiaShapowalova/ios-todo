import { Button, Text } from '../../../../components'
import { IoCloseOutline } from 'react-icons/io5'

const TaskSimpleView = () => {
  return (
    //  Title,flag, checkbox, createdAt, EditedAt, delete, dueDataTime
    <>
      {/* checkbox  */}
      <Text variant="h4">Task Title</Text>
      <Button
        variant="deleteCategoryButton"
        size="md"
        color="dark"
        icon={<IoCloseOutline />}></Button>
    </>
  )
}

export default TaskSimpleView
