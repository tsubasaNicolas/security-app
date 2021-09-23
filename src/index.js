import app from "./app";
//algo par commit

const app = require(path.join(__dirname, "./app"));

const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});