import './Tags.scss';

function Tags({ tags }) {
    return (
        <div className="tags-container">
            {tags.map((tag, index) => (
                <span key={index} className="tag-item">
                    {tag}
                </span>
            ))}
        </div>
    );
}
export default Tags;