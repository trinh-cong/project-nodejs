
const db = require('../config/db');

class UserController {
  static async createUser(firstName, lastName, mobile, username, password) {
    const query = 'INSERT INTO users (first_name, last_name, mobile, username, password) VALUES (?, ?, ?, ?, ?)';
    const values = [firstName, lastName, mobile, username, password];

    return new Promise((resolve, reject) => {
      db.query(query, values, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }

  static async getAllUsers() {
    const query = 'SELECT * FROM users';

    return new Promise((resolve, reject) => {
      db.query(query, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }
}

module.exports = UserController;