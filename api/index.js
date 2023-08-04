require("./Configs/db");
const express = require("express");
const userRoute = require("./Routes/userRoute");
const productRoute = require("./Routes/productRoutes");
// const statisticsRoute = require("./routes/statistisRoute");
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});
app.use("/api/users", userRoute);
 app.use("/api/product", productRoute);


