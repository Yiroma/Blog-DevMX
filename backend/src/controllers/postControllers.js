const models = require("../models");

const getAllPosts = (req, res) => {
  models.post
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getOnePost = (req, res) => {
  models.post
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const createPost = (req, res) => {
  const newPost = req.body;
  models.post
    .insert(newPost)
    .then((createdPost) => {
      res.status(201).json(createdPost);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "Erreur lors de la création du post." });
    });
};

const updatePost = (req, res) => {
  const post = req.body;

  post.id = parseInt(req.params.id, 10);

  if (!post.desc) {
    res.status(200).json({ message: "Modification ok." });
    return;
  }

  models.post
    .update(post)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const deletePost = (req, res) => {
  const postId = req.params.id;
  models.post
    .delete(postId)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "Erreur lors de la suppression du post." });
    });
};

module.exports = {
  getAllPosts,
  getOnePost,
  createPost,
  updatePost,
  deletePost,
};
