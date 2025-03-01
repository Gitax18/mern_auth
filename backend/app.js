// importing dependencies libraries
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// importing customs files
const AuthRouter = require("./routes/auth");
const ProductRouter = require("./routes/product");

// running function executions
require("./models/db");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

// middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(AuthRouter);
app.use(ProductRouter);

app.get("/", (req, res) => {
  res.send("DONE");
});

app.listen(PORT, () => {
  console.log(`server listening on http://localhost:${PORT}`);
});
