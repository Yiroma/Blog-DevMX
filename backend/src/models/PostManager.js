const AbstractManager = require("./AbstractManager");

class PostManager extends AbstractManager {
  constructor() {
    super({ table: "post" });
  }

  findAllPosts(cat, callback) {
    const q = cat
      ? `SELECT * FROM ${this.table} WHERE cat = ?`
      : `SELECT * FROM ${this.table}`;
    return this.database.query(q, [cat], callback);
  }

  findOnePost(post) {
    return this.database.query(
      `SELECT ${this.table}.id, title, \`desc\`, cat, ${this.table}.img AS postImg, date, user_id, username, u.img AS userImg 
      FROM ${this.table} INNER JOIN user AS u ON u.id = ${this.table}.user_id WHERE ${this.table}.id = ?`,
      [post.id]
    );
  }

  deletePost(post) {
    return this.database.query(
      `DELETE FROM ${this.table} WHERE id = ? AND user_id = ?`,
      [post.id, post.user_id]
    );
  }

  insertPost(post) {
    return this.database.query(
      `INSERT INTO ${this.table} (title, \`desc\`, img, cat, date, user_id) VALUES (?, ?, ?, ?, ?, ?)`,
      [post.title, post.desc, post.img, post.cat, post.date, post.user_id]
    );
  }

  updatePost(post) {
    return this.database.query(
      `UPDATE ${this.table} SET title = ?, \`desc\` = ?, img = ?, cat = ?, date = ?, user_id = ? WHERE id = ?`,
      [
        post.title,
        post.desc,
        post.img,
        post.cat,
        post.date,
        post.user_id,
        post.id,
      ]
    );
  }
}

module.exports = PostManager;
