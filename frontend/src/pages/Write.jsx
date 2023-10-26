import { useRef, useState } from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function Write() {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState("");
  const [msg, setMsg] = useState("");
  const [previewImage, setPreviewImage] = useState(
    `${import.meta.env.VITE_BACKEND_URL}/assets/default-preview.svg`
  );
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", inputRef.current.files[0]);
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/upload`, formData)
      .then(() => {
        setMsg("Upload OK !");
      })
      .catch(() => {
        setMsg("Upload Failed !");
      });
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
            placeholder="Titre du nouvelle article"
            onChange={(e) => setTitle(e.target.files[0])}
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
                style={{ width: "auto", height: "200px" }}
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
