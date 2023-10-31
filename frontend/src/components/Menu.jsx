import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";

function Menu({ cat, currentPostId }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/posts/?cat=${cat}`);
        setPosts(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

  const filteredPosts = posts.filter((post) => post.id != currentPostId);

  return (
    <div className="menu">
      <h1>{`D'autres articles que vous pourriez aimer`}</h1>
      {filteredPosts.map((post) => (
        <div className="post" key={post.id}>
          <img
            src={`${import.meta.env.VITE_BACKEND_URL}/uploads/images/${post?.img}`}
            alt={post.title}
          />
          <h2>{post.title}</h2>
          <Link className="link" to={`/posts/${post.id}`}>
            <button>{`Voir l'article`}</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

Menu.propTypes = {
  cat: PropTypes.string,
  currentPostId: PropTypes.number.isRequired,
};

export default Menu;
