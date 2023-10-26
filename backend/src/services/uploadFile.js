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

module.exports = {
  postFile,
};
