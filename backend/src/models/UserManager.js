const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.database.query(
      `INSERT INTO ${this.table} (username, email, hashedPassword, img) values (?, ?, ?, ?)`,
      [user.username, user.email, user.hashedPassword, user.img]
    );
  }

  update(user) {
    return this.database.query(
      `UPDATE ${this.table} SET username = ?, email = ?, hashedPassword = ?, img = ? where id = ?`,
      [user.username, user.email, user.hashedPassword, user.img, user.id]
    );
  }
}

module.exports = UserManager;
