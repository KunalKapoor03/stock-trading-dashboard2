require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const PositionsModel = require("./model/PositionsModel");
const HoldingsModel = require("./model/HoldingsModel");
const { OrdersModel } = require("./model/OrdersModel");

const PORT = process.env.PORT || 3002;
const URL = process.env.MONGO_URL;
const app = express();

const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());

connectDB(URL);

app.get("/addHoldings", async (req, res) => {
  let tempHoldings = [
    { name: "TCS", qty: 2, avg: 3000, price: 3200, net: "+6%", day: "+1%" },
    { name: "INFY", qty: 5, avg: 1200, price: 1400, net: "+16%", day: "+2%" },
  ];

  await HoldingsModel.insertMany(tempHoldings);
  res.send("Holdings added");
});

app.get("/addPositions", async (req, res) => {
  let tempPositions = [
    {
      product: "CNC",
      name: "TCS",
      qty: 1,
      avg: 3000,
      price: 3200,
      net: "+6%",
      day: "+1%",
    },
  ];

  await PositionsModel.insertMany(tempPositions);
  res.send("Positions added");
});

app.get("/", (req, res) => {
  res.send("Zerodha Backend API is running");
});

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.get("/allOrders", async (req, res) => {
  try {
    const allOrders = await OrdersModel.find({}).sort({ createdAt: -1 });
    res.json(allOrders);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch orders" });
  }
});

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  newOrder.save();

  res.send("Order saved!");
});

app.listen(PORT, () => {
  console.log("App Started");
});
