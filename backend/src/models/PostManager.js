const AbstractManager = require("./AbstractManager");

class PostManager extends AbstractManager {
  constructor() {
    super({ table: "post" });
  }

  getAllPosts(cat, callback) {
    const q = cat
      ? `SELECT * FROM ${this.table} WHERE cat = ?`
      : `SELECT * FROM ${this.table}`;
    return this.database.query(q, [cat], callback);
  }
}

module.exports = PostManager;
