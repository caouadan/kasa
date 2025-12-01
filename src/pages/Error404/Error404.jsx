import './Error404.scss';
import { useNavigate } from 'react-router-dom';

function Error404() {
  const navigateToHome = useNavigate();

  return (
    <div className="error404">
      <h1>404</h1>
      <h2>
        Oups! La page que
        <span className="break-mobile">vous demandez n'existe pas.</span>
      </h2>
      <button
        className="backToHome"
        onClick={() => navigateToHome('/')}
      >
        Retourner sur la page d’accueil
      </button>
    </div>
  );
}

export default Error404;