import React from 'react'
import { connect } from 'react-redux'
import { addTask } from '../actions'

const AddTask = ({ dispatch }: any) => {
  let inputText: any, inputExecutor: any

  const submitTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!inputText.value.trim()) return

    dispatch(
      addTask({
        text: inputText.value,
        executor: inputExecutor.value.trim() ? inputExecutor.value : 'All',
      })
    )

    inputText.value = ''
    inputExecutor.value = ''
  }

  return (
    <div className="form-container">
      <form onSubmit={(e) => submitTask(e)}>
        <input
          className="task-form-text"
          placeholder="New task..."
          ref={(node) => (inputText = node)}
        />
        <input
          className="task-form-executor"
          placeholder="Who..."
          ref={(node) => (inputExecutor = node)}
        />
        <input className="task-form-submit" type="submit" value="Add" />
      </form>
    </div>
  )
}

export default connect()(AddTask)
