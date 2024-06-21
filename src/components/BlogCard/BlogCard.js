import "./BlogCard.css";
import { Link } from "react-router-dom";

function BlogCard({ id,logo, title, content, founder, date, Technology }) {
  return (
    <Link className="blogcard" to={`/BlogView/${id}`}>
        <img className="logo" src={logo}/>
        <h1 className="title">{title}</h1>
        <p className="pre-content">
            {content.substring(0, 100)}...
        </p>
        <br/> <br/> <br/> <br/>
        <div className="founder">
            <img src={founder.avatar} alt={founder.name} className="avatar" />
            <span className="founder-name">{founder.name}</span>
            <br/>
            
        </div>
        <div className="date">{date}</div>
        <div className="technologies">
            {Technology.map((tech, i) => (
                <span key={i} className="technology">{tech}</span>
            ))}
        </div>
    </Link>
  );
}

export default BlogCard;
