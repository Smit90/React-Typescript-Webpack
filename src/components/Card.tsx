import React from 'react'

interface cardProps {
  id: string
  text: string
  executor: any
  onChangeClick: (id: string) => void
  onRemoveClick: (id: string) => void
}

const Card = ({
  id,
  text,
  executor,
  onChangeClick,
  onRemoveClick,
}: cardProps) => {
  return (
    <div
      className="project-card"
      onClick={() => onChangeClick(id)}
      role="presentation"
    >
      <p className="card-text">{text}</p>
      <span className="card-executor">{executor}</span>
      <span
        className="card-remove"
        onClick={() => onRemoveClick(id)}
        role="presentation"
      >
        -
      </span>
    </div>
  )
}

export default Card
