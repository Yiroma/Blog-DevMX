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
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/posts?cat=${cat}`,
          {
            withCredentials: true,
          }
        );
        const sortedPosts = res.data.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        setPosts(sortedPosts);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [cat]);

  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img
                src={`${import.meta.env.VITE_BACKEND_URL}/uploads/images/${
                  post?.img
                }`}
                alt="post cover"
              />
            </div>
            <div className="content">
              <Link className="link" to={`/posts/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <div
                className="paragraph"
                dangerouslySetInnerHTML={{ __html: post.desc }}
              ></div>
              <Link className="link" to={`/posts/${post.id}`}>
                <button>{`Lire l'article`}</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
