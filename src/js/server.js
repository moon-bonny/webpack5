// 起一个express服务
let express = require("express");

let app = express();
app.get("/user", (req, res) => {
  res.json({ name: "moon" });
});

app.listen(3000);
