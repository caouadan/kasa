import './Cards.scss';

function Cards({ children, image, onClick }) {
  return (
    <div
    className="card"
    style={{ backgroundImage: `url(${image})` }}
    onClick={onClick}>
      <div className="overlay"></div>
      <div className="content">{children}</div>
    </div>
  );
}

export default Cards;