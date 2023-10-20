const AbstractManager = require("./AbstractManager");

class AuthManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  checkUser(user) {
    return this.database.query(
      `SELECT * FROM ${this.table} WHERE email = ? OR username = ?`,
      [user.email, user.username]
    );
  }
}

module.exports = AuthManager;
