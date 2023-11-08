import { useContext, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

// import toast, { toastConfig } from "react-simple-toasts";
// import "react-simple-toasts/dist/theme/dark.css"; // choose your theme

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import moment from "moment";
import "moment/locale/fr";

import { AuthContext } from "../context/authContext";

import ModalInfo from "../components/ModalInfo";

import MixyFiesta from "../assets/mixy/mixy-fiesta.webp";

// toastConfig({ theme: "dark" }); // configure global toast settings, like theme

export default function Write() {
  const { currentUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const state = useLocation().state;

  const [title, setTitle] = useState(state?.title || "");
  const [value, setValue] = useState(state?.desc || "");
  const [cat, setCat] = useState(state?.cat || "");

  const [previewImage, setPreviewImage] = useState(
    state
      ? `${import.meta.env.VITE_BACKEND_URL}/uploads/images/${state?.img}`
      : `${import.meta.env.VITE_BACKEND_URL}/assets/default-preview.svg`
  );

  const [showModal, setShowModal] = useState(false);

  const inputRef = useRef();

  moment.locale("fr");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("file", inputRef.current.files[0]);

      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/upload`, formData, {
        withCredentials: true,
      });
      if (res.status === 201) {
        if (state) {
          await axios.put(
            `${import.meta.env.VITE_BACKEND_URL}/posts/${state.id}`,
            {
              title,
              desc: value,
              cat,
              img: res.data,
              date: moment(Date.now()).format("YYYY-MM-DDTHH:mm:ssZ"),
              user_id: currentUser?.user?.id,
            },
            { withCredentials: true }
          );
        } else {
          await axios.post(
            `${import.meta.env.VITE_BACKEND_URL}/posts/`,
            {
              title,
              desc: value,
              cat,
              img: res.data,
              date: moment(Date.now()).format("YYYY-MM-DDTHH:mm:ssZ"),
              user_id: currentUser?.user?.id,
            },
            { withCredentials: true }
          );
        }
        setShowModal(true);

        setTimeout(() => {
          setShowModal(false);
          navigate("/");
        }, 5000);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    const types = ["image/jpg", "image/jpeg", "image/png"];

    if (selectedFile && types.includes(selectedFile.type)) {
      const objectUrl = URL.createObjectURL(selectedFile);
      setPreviewImage(objectUrl);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="writeContainer">
      <div className="write">
        <div className="content">
          <input
            type="text"
            value={title}
            placeholder="Titre du nouvelle article"
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="editorContainer">
            <ReactQuill className="editor" theme="snow" value={value} onChange={setValue} />
          </div>
        </div>

        <div className="menu">
          <div className="item">
            <h2>Choisir une catégories</h2>

            <div className="cat">
              <input
                type="radio"
                checked={cat === "actu"}
                name="cat"
                value="actu"
                id="actu"
                onChange={(e) => setCat(e.target.value)}
              />
              <label htmlFor="actu">Actu</label>
            </div>

            <div className="cat">
              <input
                type="radio"
                checked={cat === "event"}
                name="cat"
                value="event"
                id="event"
                onChange={(e) => setCat(e.target.value)}
              />
              <label htmlFor="event">Evènement</label>
            </div>

            <div className="cat">
              <input
                type="radio"
                checked={cat === "tips"}
                name="cat"
                value="tips"
                id="tips"
                onChange={(e) => setCat(e.target.value)}
              />
              <label htmlFor="tips">Tips & Astuces</label>
            </div>

            <div className="cat">
              <input
                type="radio"
                checked={cat === "job"}
                name="cat"
                value="job"
                id="job"
                onChange={(e) => setCat(e.target.value)}
              />
              <label htmlFor="job">Job</label>
            </div>
            <br />
            <h2>Ajouter un image</h2>

            <form
              className="previewImgContainer"
              encType="multipart/form-data"
              onSubmit={handleSubmit}
            >
              <input
                type="file"
                name="file"
                ref={inputRef}
                id="file"
                onChange={handleFileChange}
                accept=".jpg, .png, .gif"
                style={{ display: "none" }}
              />
              <label className="uploadFile" htmlFor="file">
                Choisir une image
              </label>

              <img
                className="previewImg"
                src={previewImage}
                alt="prévisualisation de l'image"
                id="previewImage"
              />

              <div className="buttons">
                <button
                  className="btnSubmit"
                  type="submit"
                  // onClick={() => toast(`${MixyFiesta}Votre articles est publié !`)}
                >
                  Publier
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {showModal && (
        <ModalInfo message="L'article est publié !" image={MixyFiesta} closeModal={closeModal} />
      )}
    </div>
  );
}
