const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const postFile = (req, res) => {
  const { originalname } = req.file;
  const { filename } = req.file;
  const oldName = `${filename}`;
  const newName = `${uuidv4()}-${originalname}`;
  fs.rename(
    `./public/uploads/images/${oldName}`,
    `./public/uploads/images/${newName}`,
    (err) => {
      if (err) {
        throw err;
      } else {
        res.status(201).send(newName);
      }
    }
  );
};

const deleteImg = (req, res) => {
  const { imgName } = req.params;

  fs.unlink(`./public/uploads/images/${imgName}`, (err) => {
    if (err) {
      console.error(`Erreur lors de la suppression de l'image:`, err);
      res.status(500).send("Erreur lors de la suppression de l'image");
    } else {
      res.status(201).send("Image deleted");
    }
  });
};

module.exports = {
  postFile,
  deleteImg,
};
