import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";

import MixyIdea from "../assets/mixy/mixy-idea.png";

function Menu({ cat, currentPostId }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/posts/?cat=${cat}`, {
          withCredentials: true,
        });
        setPosts(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [cat]);

  const filteredPosts = posts.filter((post) => post.id != currentPostId);

  return (
    <div className="menu">
      <div className="mixyAndTitle">
        <img className="mixyIdea" src={MixyIdea} alt="Articles suggérés" />
        <h1>{`D'autres articles que vous pourriez aimer`}</h1>
      </div>
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
  currentPostId: PropTypes.string,
};

export default Menu;
