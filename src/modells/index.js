const db = require("./db_config");

module.exports = {
  querySQL(sql, tes) {
    db.query(sql, (err, respon) => {
      if (err) throw err;
      tes.status(200).json({
        message: "ok!",
        data: respon,
      });
    });
  },
};
