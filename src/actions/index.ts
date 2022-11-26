let nextTaskId = 0

interface addtask {
  text: string
  executor: any
}

export const addTask = ({ text, executor }: addtask) => {
  return {
    type: 'ADD_TASK',
    id: (nextTaskId++).toString(),
    text,
    executor,
  }
}

export const removeTask = (id: string) => {
  return {
    type: 'REMOVE_TASK',
    id,
  }
}

export const changeTaskStatus = (id: string) => {
  return {
    type: 'CHANGE_TASK_STATUS',
    id,
  }
}
