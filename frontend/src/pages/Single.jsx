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
  const formattedDate = moment(post.date).format("DD/MM/YYYY HH:mm");

  const location = useLocation();
  const postId = location.pathname.split("/")[2];

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/posts/${postId}`, {
          withCredentials: true,
        });
        setPost(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [postId]);

  useEffect(() => {
    const fetchUserData = async () => {
      if (post.user_id) {
        try {
          const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/users/${post.user_id}`, {
            withCredentials: true,
          });
          setUser(res.data);
        } catch (err) {
          console.error(err);
        }
      }
    };
    fetchUserData();
  }, [post]);

  const handleDelete = async () => {
    try {
      await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/posts/${postId}`, {
        withCredentials: true,
      });

      const deleteImgRes = await axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/deleteImg/${post?.img}`
      );

      if (deleteImgRes.status === 201) {
        navigate("/");
      } else {
        console.error("Erreur lors de la suppression de l'image.");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="single">
      <div className="content">
        <img
          src={`${import.meta.env.VITE_BACKEND_URL}/uploads/images/${post?.img}`}
          alt={post?.title}
        />
        {currentUser && currentUser.user ? (
          <div className="user">
            {user.img && (
              <img
                src={`${import.meta.env.VITE_BACKEND_URL}/uploads/pictures/${user.img}`}
                alt={user.username}
              />
            )}
            <div className="info">
              <span>{user.username}</span>
              <p className="dateInfo">Publié le {formattedDate}</p>
            </div>
            {currentUser.user && currentUser.user.id === 1 && (
              <div className="edit">
                <Link to={`/write?edit=${post.id}`} state={post}>
                  <img src={Edit} alt="edit" />
                </Link>
                <img onClick={handleDelete} src={Delete} alt="delete" />
              </div>
            )}
          </div>
        ) : (
          <div className="user">
            <img
              src={`${import.meta.env.VITE_BACKEND_URL}/uploads/pictures/${user.img}`}
              alt={user.username}
            />
            <div className="info">
              <span>{user.username}</span>
              <p>Publié le {formattedDate}</p>
            </div>
          </div>
        )}

        <h1>{post.title}</h1>
        <div className="desc" dangerouslySetInnerHTML={{ __html: post.desc }}></div>
      </div>
      <Menu cat={post.cat} currentPostId={postId} />
    </div>
  );
}
