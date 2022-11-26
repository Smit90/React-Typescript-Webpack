const statuses = ['TODO', 'DOING', 'DONE']

type TasksState = any[]
const initialState: TasksState = []

const task = (state: any, action: any) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        id: action.id,
        text: action.text,
        executor: action.executor,
        status: 'TODO',
      }
    case 'REMOVE_TASK':
      if (state.id === action.id) {
        return false
      }
      return true
    case 'CHANGE_TASK_STATUS':
      if (state.id !== action.id) {
        return state
      }

      const statusNum = statuses.indexOf(state.status)
      const nextStatus = statusNum === 2 ? statuses[0] : statuses[statusNum + 1]

      return {
        ...state,
        status: nextStatus,
      }
    default:
      return state
  }
}

const tasks = (state = initialState, action: any) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, task(undefined, action)]
    case 'REMOVE_TASK':
      return state.filter((t) => task(t, action))
    case 'CHANGE_TASK_STATUS':
      return state.map((t) => task(t, action))
    default:
      return state
  }
}

export default tasks
