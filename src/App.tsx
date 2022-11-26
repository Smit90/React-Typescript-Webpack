import './styles/styles.css'
import Title from './components/Title'
import Board from './components/Borad'
import AddTask from './components/AddTask'

export const App = () => {
  return (
    <>
      <Title />
      <AddTask />
      <Board />
    </>
  )
}
