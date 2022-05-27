import express from "express";
const app = express();
const PORT = process.env.port || 3000;

import indexRouter from "./routes/index.js";
import albumRouter from "./routes/albums.js";

// test route
app.get("/", function (req, res) {
  res.json({
    success: true,
    message: "Test route up and running!",
  });
});

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});

app.use(express.json());

app.use("/", indexRouter);
app.use("/albums", albumRouter);

export default app;

console.log(PORT);