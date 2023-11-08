import { useContext, useEffect, useState } from "react";
import axios from "axios";

import { AuthContext } from "../context/authContext";
import { Link } from "react-router-dom";

import Edit from "../assets/icons/edit.svg";
import Delete from "../assets/icons/delete.svg";

export default function User() {
  const { currentUser } = useContext(AuthContext);

  const [user, setUser] = useState({});
  const [allUsers, setAllUsers] = useState([]);
  const [createdPosts, setCreatedPosts] = useState([]);
  const [otherUserPosts, setOtherUserPosts] = useState([]);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [postIdToDelete, setPostIdToDelete] = useState(null);
  const [imageToDelete, setImageToDelete] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/posts`,
          {
            withCredentials: true,
          }
        );
        const userPosts = res.data.filter(
          (post) => post.user_id === currentUser.user.id
        );
        setCreatedPosts(userPosts);

        const otherPosts = res.data.filter(
          (post) => post.user_id !== currentUser.user.id
        );
        setOtherUserPosts(otherPosts);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [currentUser]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/users/${currentUser.user.id}`,
          {
            withCredentials: true,
          }
        );
        setUser(res.data);
        setImgLoaded(true);
      } catch (err) {
        console.error(err);
      }
    };
    fetchUserData();
  }, [currentUser.user.id]);

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/users`,
          {
            withCredentials: true,
          }
        );
        setAllUsers(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchAllUsers();
  }, []);

  const handleDelete = (postId, imgName) => {
    setPostIdToDelete(postId);
    setImageToDelete(imgName);
  };

  const confirmDelete = async () => {
    if (postIdToDelete) {
      try {
        await axios.delete(
          `${import.meta.env.VITE_BACKEND_URL}/posts/${postIdToDelete}`,
          {
            withCredentials: true,
          }
        );

        if (imageToDelete) {
          await axios.delete(
            `${import.meta.env.VITE_BACKEND_URL}/deleteImg/${imageToDelete}`,
            {
              withCredentials: true,
            }
          );
        }

        setCreatedPosts((prevPosts) =>
          prevPosts.filter((post) => post.id !== postIdToDelete)
        );

        setPostIdToDelete(null);
        setImageToDelete(null);
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div className="userPageContainer">
      <h2>Vos informations</h2>
      {currentUser ? (
        <div className="userImgAndDetails">
          {imgLoaded && (
            <img
              src={`${import.meta.env.VITE_BACKEND_URL}/uploads/pictures/${
                user.img
              }`}
              alt={user.username}
            />
          )}
          <div className="userDetails">
            <h3>{user.username}</h3>
            <p>{user.email}</p>
            <button type="button">
              <img src={Edit} alt="edit" />
            </button>
          </div>
        </div>
      ) : (
        <p>Veuillez vous connecter pour accéder à votre profil.</p>
      )}

      <h2>Vos articles</h2>
      {createdPosts.map((post) => (
        <div className="userPostsAndDetails" key={post.id}>
          <h3>{post.title}</h3>
          <div className="userPostsDetails">
            <img
              src={`${import.meta.env.VITE_BACKEND_URL}/uploads/images/${
                post.img
              }`}
              alt={post.title}
            />
            <div className="edit">
              <Link to={`/write?edit=${post.id}`} state={post}>
                <img src={Edit} alt="edit" />
              </Link>
              <img
                onClick={() => handleDelete(post.id, post.img)}
                src={Delete}
                alt="delete"
              />
            </div>
            {postIdToDelete && (
              <div>
                <p className="deleteAlert">Supprimer cette article ?</p>
                <button className="btnConfirmDelete" onClick={confirmDelete}>
                  Supprimer
                </button>
              </div>
            )}
          </div>
        </div>
      ))}

      {currentUser.user.id === 1 && (
        <div className="otherPostsContainer">
          <h2>Articles des utilisateurs</h2>
          {otherUserPosts.map((post) => (
            <div className="otherPostsAndDetails" key={post.id}>
              <h3>{post.title}</h3>
              <div className="otherPostsDetails">
                <img
                  src={`${import.meta.env.VITE_BACKEND_URL}/uploads/images/${
                    post.img
                  }`}
                  alt={post.title}
                />
                <div className="edit">
                  <Link to={`/write?edit=${post.id}`} state={post}>
                    <img src={Edit} alt="edit" />
                  </Link>
                  <img
                    onClick={() => handleDelete(post.id, post.img)}
                    src={Delete}
                    alt="delete"
                  />
                </div>
                {postIdToDelete && (
                  <div>
                    <p className="deleteAlert">Supprimer cette article ?</p>
                    <button
                      className="btnConfirmDelete"
                      onClick={confirmDelete}
                    >
                      Supprimer
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {currentUser.user.id === 1 && (
        <div className="otherUsersContainer">
          <h2>Liste des utilisateurs</h2>

          {allUsers.map((user) => (
            <div className="otherUsersImgAndDetails" key={user.id}>
              <img
                src={`${import.meta.env.VITE_BACKEND_URL}/uploads/pictures/${
                  user.img
                }`}
                alt={user.username}
              />
              <div className="otherUsersDetails">
                <h3>{user.username}</h3>
                <p>{user.email}</p>
                <div className="btnEditDelete">
                  <button className="btnEdit" type="button">
                    <img src={Edit} alt="edit" />
                  </button>
                  <button className="btnDelete" type="button">
                    <img src={Delete} alt="delete" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
