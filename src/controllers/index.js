const { validationResult } = require("express-validator");
const fs = require("fs");
const path = require("path");
const { querySQL } = require("../modells");

module.exports = {
  allBook(req, res) {
    const sql = `select * from users`;
    querySQL(sql, res);
  },

  post(req, res) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const err = new Error("inputan harus diatas 5");
      err.errorStatus = 401;
      err.data = errors.array();
      throw err;
    }
    const data = {
      name: req.body.name,
      tgl: req.body.tgl,
      bio: req.body.bio,
    };

    const sql = `insert into users (name, tgl, bio)
                 values ('${data.name}','${data.tgl}','${data.bio}')`;
    querySQL(sql, res);
  },

  bookById(req, res) {
    const blogId = req.params.blogId;
    const sql = `select * from users where id='${blogId}'`;
    querySQL(sql, res);
  },

  updateData(req, res, next) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const err = new Error("inputan harus diatas 5");
      err.errorStatus = 401;
      err.data = errors.array();
      throw err;
    }

    const data = {
      name: req.body.name,
      tgl: req.body.tgl,
      bio: req.body.bio,
    };

    const blogId = req.params.blogId;
    const sql = `update users set name='${data.name}', tgl='${data.tgl}', bio='${data.bio}' where id='${blogId}'`;
    querySQL(sql, res);
  },

  destroy(req, res, next) {
    const blogId = req.params.blogId;

    const sql = `delete from users where id='${blogId}'`;
    querySQL(sql, res);
  },
};
