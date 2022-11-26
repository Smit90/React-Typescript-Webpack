import React from 'react'
import { connect } from 'react-redux'

interface titleProps {
  cardsCount: number
}

const Title = ({ cardsCount }: titleProps) => (
  <div className="project-info">
    <h1>Project Board</h1>
    <p>There are {cardsCount} tasks on board</p>
    <span>
      Type task text and executor name. Click on card to move to another list.
    </span>
  </div>
)

const mapStateToProps = (state: []) => {
  return {
    cardsCount: state.length,
  }
}

export default connect(mapStateToProps)(Title)
