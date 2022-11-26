import './styles/styles.css'
import Image from './assets/devops.png'
import Laugh from './assets/laughing.svg'
import { ClickCounter } from './ClickCounter'

export const App = () => {
  return (
    <>
      <h1>
        React Typescript Webpack - {process.env.NODE_ENV}-{process.env.name}
      </h1>
      <img src={Image} alt="devops" />
      <img src={Laugh} alt="laughing" width="300" />
      <ClickCounter />
    </>
  )
}
