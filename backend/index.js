const express = require("express");
require("dotenv").config();
const app = express();
const cardRouter = require("./routes/card");

const cors = require("cors");

// Middlewares
app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res
    .json({
      message: "Hello,server",
    })
    .status(201);
});

app.use("/card", cardRouter);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
