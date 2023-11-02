import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

export default function Home() {
  const [posts, setPosts] = useState([]);

  const searchParams = new URLSearchParams(useLocation().search);
  const cat = searchParams.get("cat") || "";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/posts?cat=${cat}`, {
          withCredentials: true,
        });
        const sortedPosts = res.data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setPosts(sortedPosts);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [cat]);

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img
                src={`${import.meta.env.VITE_BACKEND_URL}/uploads/images/${post?.img}`}
                alt="post cover"
              />
            </div>
            <div className="content">
              <Link className="link" to={`/posts/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              {getText(post.desc)}
              <Link className="link" to={`/posts/${post.id}`}>
                <button>Read More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
