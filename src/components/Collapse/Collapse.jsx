import './Collapse.scss';
import { useState } from 'react';
import arrowCollapse from '../../assets/arrow-collapse.png';

function Collapse({ children, title }) {
    const [isVisible, setVisible] = useState(false);

    return (
        <div className="collapse">
            <div className="collapse-header"
                onClick={() => setVisible(!isVisible)}
            >
                <h2>{title}</h2>
                <img
                    src={arrowCollapse}
                    className={`collapse-icon ${isVisible ? 'open' : ''}`}
                    alt="collapse arrow"
                />
            </div>
            <div className={`collapse-content ${isVisible ? 'open' : ''}`}>
                {children}
            </div>
        </div>
    );
}

export default Collapse;