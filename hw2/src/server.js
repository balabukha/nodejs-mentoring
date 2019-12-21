const express = require("express");
const app = express();
// const users = require("./users");

app.set("port", 3030);

app.use(express.json());
app.use("/", require("./users.js"));

app.listen(app.get("port"), () => {
  console.log(`[OK] Server is running on localhost:${app.get("port")}`);
});
