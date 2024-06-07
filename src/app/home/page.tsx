import Carrousel from "../../components/carrousel/carrousel"
import CardContainer from "../../components/card/cardContainer"
import Title from "../../components/title/title"


const Home: React.FC = () => {

    return (
        <div>
            <Carrousel/>
            <Title />
            <CardContainer />
        </div>
    )
}

export default Home