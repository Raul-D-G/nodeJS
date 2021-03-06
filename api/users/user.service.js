const pool = require("../../config/database");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      `INSERT INTO users(rol, mail, parola, nume, adresa, cui)
                VALUES(?,?,?,?,?,?)`,
      [
        data.rol,
        data.mail,
        data.parola,
        data.numeCompanie,
        data.adresaCompanie,
        data.cuiCompanie,
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  getUsers: (callBack) => {
    pool.query(
      `SELECT id, rol, mail, nume, adresa, cui
            FROM users`,
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  getUserById: (id, callBack) => {
    pool.query(
      `SELECT id, rol, mail, nume, adresa, cui
            FROM users
             WHERE id = ? `,
      [id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        } else {
          return callBack(null, results[0]);
        }
      }
    );
  },

  updateUser: (data, callBack) => {
    pool.query(
      `UPDATE users SET rol=?, mail=?, parola=?, nume=?, adresa=?, cui=?
             WHERE id=?`,
      [
        data.rol,
        data.mail,
        data.parola,
        data.nume,
        data.adresa,
        data.cui,
        data.id,
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        } else {
          return callBack(null, results);
        }
      }
    );
  },

  deleteUser: (data, callBack) => {
    pool.query(
      `DELETE FROM users WHERE id=?`,
      [data.id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        } else {
          return callBack(null, results);
        }
      }
    );
  },

  getUserByEmail: (mail, callBack) => {
    pool.query(
      `SELECT * FROM users WHERE mail=?`,
      [mail],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
};
