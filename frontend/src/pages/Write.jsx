import { useContext, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import moment from "moment";
import "moment/locale/fr";

import { AuthContext } from "../context/authContext";

export default function Write() {
  const { currentUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const state = useLocation().state;

  const [title, setTitle] = useState(state?.title || "");
  const [value, setValue] = useState(state?.desc || "");
  const [file, setFile] = useState(state?.img || null);
  const [cat, setCat] = useState(state?.cat || "");

  const [previewImage, setPreviewImage] = useState(
    state?.img || `${import.meta.env.VITE_BACKEND_URL}/assets/default-preview.svg`
  );

  const inputRef = useRef();

  moment.locale("fr");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("file", inputRef.current.files[0]);
      const res = axios.post(`${import.meta.env.VITE_BACKEND_URL}/upload`, formData);
      if (res.sendStatus === 200) {
        setFile(res.data);
      }
    } catch (err) {
      console.error(err);
    }

    try {
      state
        ? await axios.put(`${import.meta.env.VITE_BACKEND_URL}/posts/${state.id}`, {
            title,
            desc: value,
            cat,
            img: file ? file : "",
            date: moment(Date.now()).format("YYYY-MM-DDTHH:mm:ssZ"),
            user_id: currentUser?.user?.id,
          })
        : await axios.post(`${import.meta.env.VITE_BACKEND_URL}/posts/`, {
            title,
            desc: value,
            cat,
            img: file ? file : "",
            date: moment(Date.now()).format("YYYY-MM-DDTHH:mm:ssZ"),
            user_id: currentUser?.user?.id,
          });
    } catch (err) {
      console.error(err);
    }
    navigate("/");
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    const types = ["image/jpg", "image/jpeg", "image/png"];

    if (selectedFile && types.includes(selectedFile.type)) {
      const objectUrl = URL.createObjectURL(selectedFile);
      setPreviewImage(objectUrl);
    }
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
            <h2>Publier</h2>

            <span>
              <b>Status: </b> Brouillon
            </span>

            <span>
              <b>Visibilité: </b> Publique
            </span>

            <form encType="multipart/form-data" onSubmit={handleSubmit}>
              <input
                type="file"
                ref={inputRef}
                name="uploadImg"
                id="file"
                onChange={handleFileChange}
                accept=".jpg, .png, .gif"
                style={{ display: "none" }}
              />
              <label className="uploadFile" htmlFor="file">
                Choisir une image
              </label>

              <img
                src={previewImage}
                alt="prévisualisation de l'image"
                id="previewImage"
                style={{
                  width: "200px",
                  height: "130px",
                  objectFit: "contain",
                  borderRadius: "10px",
                }}
              />

              <div className="buttons">
                <button type="button">Enregistrer en brouillon</button>
                <button type="submit">Publier</button>
              </div>
            </form>
          </div>
          <div className="item">
            <h2>Catégories</h2>

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
          </div>
        </div>
      </div>
    </div>
  );
}
