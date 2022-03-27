import { connect } from "../database";
const fs = require("fs");
const path = require("path");
const multer = require("multer");

const diskstorage = multer.diskStorage({
  destination: path.join(__dirname, "../images"),
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-NC-" + file.originalname);
  },
});

export const fileUpload = multer({
  storage: diskstorage,
}).single("image");

export const getImagenes = async (req, res) => {
  try {
    const connection = await connect();
    const [rows] = await connection.query("SELECT * FROM image");
    rows.map((img) => {
      fs.writeFileSync(
        path.join(__dirname, "../dbimages/" + img.id + "_" + "nico.png"),
        img.data
      );
    });

    const imagedir = fs.readdirSync(path.join(__dirname, "../dbimages/"));

    res.json(imagedir);

    console.log(fs.readdirSync(path.join(__dirname, "../dbimages/")));
    res.json(rows);
  } catch (error) {
    console.log(error);
  }
};

export const saveImagenes = async (req, res) => {
  console.log(req.file);

  const connection = await connect();
  const type = req.file.mimetype;

  const name = req.file.originalname;
  const data = fs.readFileSync(
    path.join(__dirname, "../images/" + req.file.filename)
  );

  var sql = "INSERT INTO image(type, name, data)values(?,?,?);";
  const [results] = await connection.execute(sql, [type, name, data]);
  res.json({
    id: results.insertId,
    ...req.body,
  });
};

export const deleteImagen = async (req, res) => {
  const connection = await connect();
  await connection.execute("DELETE FROM image WHERE id = ?", [req.params.id]);

  fs.unlinkSync(
    path.join(__dirname, "../dbimages/" + req.params.id + "_" + "nico.png")
  );

  res.send("image deleted");
};
