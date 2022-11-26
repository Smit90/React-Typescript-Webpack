import React from 'react'
import { connect } from 'react-redux'
import { changeTaskStatus, removeTask } from '../actions'
import Card from './Card'

interface listProps {
  status: string
  children: React.ReactNode
  tasks: task[]
  changeStatus: (id: string) => void
  remove: (id: string) => void
}

interface task {
  id: string
  executor: string
  text: string
  status: string
}

const List = ({ status, children, tasks, changeStatus, remove }: listProps) => (
  <div className={`list ${status.toLowerCase()}-list`}>
    <h5>
      {children} <span>{tasks.length}</span>
    </h5>

    {tasks.map((task: task) => (
      <Card
        key={task.id}
        {...task}
        onChangeClick={changeStatus}
        onRemoveClick={remove}
      />
    ))}
  </div>
)

const mapStateToProps = (state: task[], ownProps: any) => {
  return {
    tasks: state.filter((t) => t.status === ownProps.status),
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    changeStatus: (id: string) => {
      dispatch(changeTaskStatus(id))
    },
    remove: (id: string) => {
      dispatch(removeTask(id))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
