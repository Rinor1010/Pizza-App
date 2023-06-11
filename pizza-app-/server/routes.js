const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Orders = require("./orders");
const Admins = require("./admins");

const authenticateToken = (req, res, next) => {
  const header = req.headers["authorization"];
  const token = header.split(" ")[1];
  if (token == null || undefined || "") res.send("Unauthorized");
  else
    jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
      if (err) return res.send("403: Forbidden");
      req.user = user;
      next();
    });
};

router.get("/orders", authenticateToken, async (req, res) => {
  const orders = await Orders.find();
  res.json(orders);
});

router.get("/orders/:id", authenticateToken, async (req, res) => {
  const order = await Orders.findById(req.params.id);
  res.json(order);
});

router.patch("/orders/:id", authenticateToken, async (req, res) => {
  const order = await Orders.findById(req.params.id);

  const newOrder = await Orders.findByIdAndUpdate(req.params.id, {
    done: !order.done,
  });
  res.send(newOrder);
});

router.delete("/orders/:id", authenticateToken, async (req, res) => {
  const order = await Orders.findById(req.params.id);

  const deletedOrder = await Orders.findByIdAndDelete(req.params.id, order);
  res.send(deletedOrder);
});

router.get("/admins", authenticateToken, async (req, res) => {
  const admins = await Admins.find();
  res.json(admins);
});

router.post("/sign-in", (req, res) => {
  const order = new Orders({
    name: req.body.name,
    phone: req.body.phone,
    address: req.body.address,
    cart: req.body.cart,
  });
  order
    .save()
    .then((data) => res.json(data))
    .catch((error) => console.log(error));
});

router.post("/sign-in/admin", async (req, res) => {
  try {
    const admins = await Admins.find();
    const admin = admins.find((user) => req.body.name === user.name);
    if (admin == null) return res.send("404: Not Found");
    if (await bcrypt.compare(req.body.password, admin.password)) {
      const accessToken = jwt.sign({ admin }, process.env.ACCESS_TOKEN, {
        expiresIn: 300,
      });
      res.send({
        auth: true,
        accessToken: accessToken,
      });
    } else res.send("401: Unauthorized");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
