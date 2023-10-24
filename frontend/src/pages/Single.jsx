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

  const location = useLocation();

  const postId = location.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext);

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

  moment.locale("fr");

  const formattedDate = moment(post.date).format("DD/MM/YYYY, hh:mm");

  return (
    <div className="single">
      <div className="content">
        <img src={post?.img} alt={post?.title} />
        <div className="user">
          <img src={User} alt="user" />
          <div className="info">
            <span>{post.username}</span>
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
