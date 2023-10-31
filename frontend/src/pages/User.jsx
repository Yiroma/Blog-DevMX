import { useContext, useEffect, useState } from "react";
import axios from "axios";

import { AuthContext } from "../context/authContext";
import { Link } from "react-router-dom";

import Edit from "../assets/icons/edit.svg";
import Delete from "../assets/icons/delete.svg";

export default function User() {
  const { currentUser } = useContext(AuthContext);

  const [user, setUser] = useState({});
  const [createdPosts, setCreatedPosts] = useState([]);
  const [postIdToDelete, setPostIdToDelete] = useState(null);
  const [imageToDelete, setImageToDelete] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/posts`)
      .then((res) => {
        const userPosts = res.data.filter((post) => post.user_id === currentUser.user.id);
        setCreatedPosts(userPosts);
      })
      .catch((err) => console.error(err));
  }, [currentUser]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/users/${currentUser.user.id}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => console.error(err));
  }, [currentUser.user.id]);

  const handleDelete = (postId, imgName) => {
    setPostIdToDelete(postId);
    setImageToDelete(imgName);
    console.log(postId);
    console.log(imgName);
  };

  const confirmDelete = async () => {
    if (postIdToDelete) {
      try {
        await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/posts/${postIdToDelete}`);

        if (imageToDelete) {
          await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/deleteImg/${imageToDelete}`);
        }

        setPostIdToDelete(null);
        setImageToDelete(null);

        window.location.reload();
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div className="userPageContainer">
      <h1>Vos informations</h1>
      {currentUser ? (
        <div>
          <img
            src={`${import.meta.env.VITE_BACKEND_URL}/uploads/pictures/${user.img}`}
            alt={user.username}
          />
          <h2>{user.username}</h2>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>Veuillez vous connecter pour accéder à votre profil.</p>
      )}

      <h2>Vos articles</h2>
      {createdPosts.map((post) => (
        <div key={post.id}>
          <img
            src={`${import.meta.env.VITE_BACKEND_URL}/uploads/images/${post.img}`}
            alt={post.title}
          />
          <h3>{post.title}</h3>
          <div className="edit">
            <Link to={`/write?edit=${post.id}`} state={post}>
              <img src={Edit} alt="edit" />
            </Link>
            <img onClick={() => handleDelete(post.id, post.img)} src={Delete} alt="delete" />
            {postIdToDelete && (
              <div>
                <p>Voulez-vous vraiment supprimer ce post ?</p>
                <button onClick={confirmDelete}>Confirmer la suppression</button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
