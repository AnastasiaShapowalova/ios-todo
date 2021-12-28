import { Input, Checkbox, Col, Row, Button } from 'components'
import { TaskSimpleFormWrapper, InputWrapper } from './TaskSimpleForm.style'
import { useSetTask, useStore } from 'context/hook'
import { useState } from 'react'
import { BsFlagFill } from 'react-icons/bs'

const TaskSimpleForm = (props) => {
  const { addTask } = props

  const { AddTask, task, setNewTask } = useSetTask(addTask)

  const [text, setText] = useState('')
  // const [day, setDay] = useState(new Date())

  return (
    <TaskSimpleFormWrapper onKeyPress={AddTask} className="direction-column">
      <Row>
        <Col className="direction-row">
          <Checkbox color="green" />
          <InputWrapper className="pt-sm pb-md">
            <Input
              type="text"
              value={task}
              onChange={(e) => setNewTask(e)}
              autoFocus
            />
            <Input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              variant="input-isMuted"
              placeholder="Notes"
            />
            {/* <Input type="date" /> */}
            <Button
              icon={<BsFlagFill />}
              size="md"
              color="orange"
              shape="rounded"
              variant="button-isFilled"
            />
          </InputWrapper>
        </Col>
      </Row>
    </TaskSimpleFormWrapper>
  )
}

export default TaskSimpleForm
