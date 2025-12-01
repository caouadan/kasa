import './Home.scss';
import Banner from '../../components/Banner/Banner.jsx';
import bannerHome from '../../assets/banner-home.png';
import { useNavigate } from 'react-router-dom';
import Cards from '../../components/Cards/Cards.jsx';
import logementData from '../../data/logements.json';

function Home() {
  const navigate = useNavigate();

  const navigateToLogement = (id) => {
    navigate(`/logement/${id}`);
  };
  return (
    <div className ="home-page">
      <div>
        <Banner
          image={bannerHome}
          text={
            <>
              <span>Chez vous, </span>
              <span className="break-mobile">
              partout et ailleurs
              </span>
            </>
          }
        />
      </div>
      <div className="cards-container">
        <div className="cards-grid">
        {logementData.map((logement) => (
          <Cards
            key={logement.id}
            image={logement.cover}
            onClick={() => navigateToLogement(logement.id)}
          >
            <span className="cards-title">{logement.title}</span>
          </Cards>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Home;