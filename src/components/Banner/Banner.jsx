import './Banner.scss';

function Banner({ image, text }) {
  return (
    <div
      className="banner"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="overlay"></div>
      {text && <h1>{text}</h1>}
    </div>
  );
}

export default Banner;