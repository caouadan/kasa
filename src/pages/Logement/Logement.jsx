import "./Logement.scss";
import { useParams, Navigate } from "react-router-dom";
import data from "../../data/logements.json";
import Slideshow from "../../components/Slideshow/Slideshow.jsx";
import Tags from "../../components/Tags/Tags.jsx";
import Rating from "../../components/Rating/Rating.jsx";
import Collapse from "../../components/Collapse/Collapse.jsx";

function Logement() {
  const { id } = useParams();
  const logement = data.find((l) => l.id === id);

  if (!logement) {
    return <Navigate to="/404" replace />;
  }

  const [firstName, lastName] = logement.host.name.split(" ");

  return (
    <div className="logement-page">
      <Slideshow pictures={logement.pictures} />

      <div className="logement-header">
        <div className="logement-main-info">
          <h1 className="logement-title">{logement.title}</h1>
          <p className="logement-location">{logement.location}</p>
          <Tags tags={logement.tags} />
        </div>

        <div className="logement-side">
          <div className="logement-host">
            <span className="logement-host-name">
              {firstName}
              <br />
              {lastName}
            </span>
            <img
              className="logement-host-picture"
              src={logement.host.picture}
              alt={logement.host.name}
            />
          </div>
          <div className="logement-rating">
            <Rating rating={logement.rating} />
          </div>
        </div>
      </div>

      <div className="logement-info">
        <Collapse title="Description">
          <p>{logement.description}</p>
        </Collapse>
        <Collapse title="Équipements">
          <ul>
            {logement.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
}

export default Logement;