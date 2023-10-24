import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import "moment/locale/fr";

import { AuthContext } from "../context/authContext";

import Menu from "../components/Menu";

import User from "../assets/icons/user-default.svg";
import Edit from "../assets/icons/edit.svg";
import Delete from "../assets/icons/delete.svg";

export default function Single() {
  const [post, setPost] = useState({});
  const [user, setUser] = useState({});

  const location = useLocation();

  const postId = location.pathname.split("/")[2];
  const userId = post.user_id;

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/posts/${postId}`);
        setPost(response.data);
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/users/${userId}`)
      .then((res) => {
        setUser(res.data);
        console.log(res.data);
      })
      .catch((err) => console.error(err));
  }, [userId]);

  moment.locale("fr");

  const formattedDate = moment(post.date).format("DD/MM/YYYY");

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
              <img src={Delete} alt="delete" />
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
