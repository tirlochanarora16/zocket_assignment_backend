const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const productRoutes = require("./routes/produt");
const campaignRoutes = require("./routes/campaign");

const app = express();
dotenv.config();

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/", (req, res) => res.status(200).json({ msg: "hello world" }));
app.use("/products", productRoutes);
app.use("/campaign", campaignRoutes);

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.so02t.mongodb.net/zocket`
  )
  .then(() => {
    console.log("db connected");
    app.listen(process.env.PORT || 8080, () => console.log("server running"));
  })
  .catch((err) => console.log(err));
