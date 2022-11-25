import './styles.css'
import Image from './devops.png'
import Laugh from './laughing.svg'

export const App = () => {
    return (
        <>
            <h1>React Typescript Webpack</h1>
            <img src={Image} alt="devops" />
            <img src={Laugh} alt="laughing" width="300" />
        </>
    )
}
