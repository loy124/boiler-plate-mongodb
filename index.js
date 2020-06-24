const express = require("express");
const app = express();
const port = 5000;
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://loy124:leesj0813@boilerplate-n6k6p.mongodb.net/<dbname>?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Hello world"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
