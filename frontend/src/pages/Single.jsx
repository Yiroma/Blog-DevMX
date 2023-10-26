import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import "moment/locale/fr";

import { AuthContext } from "../context/authContext";

import Menu from "../components/Menu";

import Edit from "../assets/icons/edit.svg";
import Delete from "../assets/icons/delete.svg";

export default function Single() {
  const [post, setPost] = useState({});
  const [user, setUser] = useState({});

  const { currentUser } = useContext(AuthContext);

  moment.locale("fr");
  const formattedDate = moment(post.date).format("DD/MM/YYYY");

  const location = useLocation();
  const postId = location.pathname.split("/")[2];

  const navigate = useNavigate();

  // const userId = post.user_id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/posts/${postId}`);
        setPost(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);

  useEffect(() => {
    if (post.user_id) {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/users/${post.user_id}`)
        .then((res) => {
          setUser(res.data);
        })
        .catch((err) => console.error(err));
    }
  }, [post]);

  const handleDelete = async () => {
    try {
      await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/posts/${postId}`);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="single">
      <div className="content">
        <img src={post?.img} alt={post?.title} />
        <div className="user">
          {user.img && <img src={user.img} alt={user.username} />}
          <div className="info">
            <span>{user.username}</span>
            <p>Publié le {formattedDate}</p>
          </div>
          {currentUser.user.id === post.user_id && (
            <div className="edit">
              <Link to="/write?edit=1">
                <img src={Edit} alt="edit" />
              </Link>
              <img onClick={handleDelete} src={Delete} alt="delete" />
            </div>
          )}
        </div>
        <h1>{post.title}</h1>
        <p>{post.desc}</p>
      </div>
      <Menu />
    </div>
  );
}
