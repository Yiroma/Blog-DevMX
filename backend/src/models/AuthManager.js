const AbstractManager = require("./AbstractManager");

class AuthManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  checkUserExists(user) {
    return this.database.query(`SELECT email, username FROM ${this.table}`, [
      user.email,
      user.username,
    ]);
  }

  checkUserByEmail(user) {
    return this.database.query(`SELECT * FROM ${this.table} WHERE email = ?`, [
      user.email,
    ]);
  }

  checkUserByPassword(user) {
    return this.database.query(
      `SELECT * FROM ${this.table} WHERE hashedPassword = ?`,
      [user.hashedPassword]
    );
  }
}

module.exports = AuthManager;
