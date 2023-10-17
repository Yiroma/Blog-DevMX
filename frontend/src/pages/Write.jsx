import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function Write() {
  const [value, setValue] = useState("");

  return (
    <div className="writeContainer">
      <div className="write">
        <div className="content">
          <input type="text" placeholder="Titre du nouvelle article" />
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
            <input type="file" name="uploadImg" id="file" style={{ display: "none" }} />
            <label className="uploadFile" htmlFor="file">
              Choisir une image
            </label>
            <div className="buttons">
              <button type="button">Enregistrer en brouillon</button>
              <button type="button">Mettre à jour</button>
            </div>
          </div>
          <div className="item">
            <h2>Catégories</h2>
            <div className="cat">
              <input type="radio" name="cat" value="actu" id="actu" />
              <label htmlFor="actu">Actu</label>
            </div>
            <div className="cat">
              <input type="radio" name="cat" value="event" id="event" />
              <label htmlFor="event">Evènement</label>
            </div>
            <div className="cat">
              <input type="radio" name="cat" value="tips" id="tips" />
              <label htmlFor="tips">Tips & Astuces</label>
            </div>
            <div className="cat">
              <input type="radio" name="cat" value="job" id="job" />
              <label htmlFor="job">Job</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
