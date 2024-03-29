import { getId } from 'services/firestore'
import { useState } from 'react'

const useSetTask = (addTask, createTask, selectedCategory) => {
  const [task, setTask] = useState('')
  const setNewTask = (e) => {
    setTask(e.target.value)
  }

  const AddTask = (event) => {
    const newTask = task.trim()
    if (event.key === 'Enter' && newTask.length >= 1) {
      addTask(newTask)
      createTask(newTask, getId('task'), selectedCategory)
      setTask('')
    }
  }

  return { task, setTask, AddTask, setNewTask }
}

export default useSetTask
