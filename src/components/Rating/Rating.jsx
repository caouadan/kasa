import './Rating.scss';
import starActive from '../../assets/star-active.png';
import starInactive from '../../assets/star-inactive.png';

function Rating({ rating }) {
    const totalStars = 5;
    const filledStars = Math.round(rating);
    const emptyStars = totalStars - filledStars;
    return (
        <div className="rating">
            {[...Array(filledStars)].map((_, index) => (
                <img
                    key={`filled-${index}`}
                    src={starActive}
                    alt="active star"
                    className="star-icon"
                />
            ))}
            {[...Array(emptyStars)].map((_, index) => (
                <img
                    key={`empty-${index}`}
                    src={starInactive}
                    alt="inactive star"
                    className="star-icon"
                />
            ))}
        </div>
    );
}
export default Rating;