import express from "express";
import { users, removeUser } from "./utils.js";

const app = express();

const port = 8000;

app.use(express.json());

app.get("/test", (req, res) => {
  res.json({
    success: true,
    message: "Server is ready",
  });
});

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Fetched  all users",
    users,
  });
});

app.post("/", (req, res) => {
  const username = req.body.userName;
  const kidneys = req.body.kidneys;
  if (!kidneys || !username) {
    res.status(403).json({
      success: false,
      message: "Invalid inputs",
    });
  }
  users.push({ username, kidneys });
  res.json({
    success: true,
    message: "created new user",
  });
});
app.put("/:userName", (req, res) => {
  const username = req.params.userName;
  const kidneys = req.body.kidneys;
  if (!kidneys) {
    return res.status(403).json({
      success: false,
      message: "Invalid inputs",
    });
  }
  users.forEach((user) => {
    if ((user.username = username)) {
      user.kidneys = kidneys;
    }
  });
  res.json({
    success: true,
    message: "Updated the user",
  });
});
app.get("/:userName", (req, res) => {
  const username = req.params.userName;
  if (!username) {
    return res.status(403).json({
      success: false,
      message: "Invalid inputs",
    });
  }
  const user = users.find((user) => user.username === username);
  res.json({
    success: true,
    message: "created new user",
    user,
  });
});

app.delete("/:userName", (req, res) => {
  const username = req.params.userName;
  if (!username) {
    return res.status(403).json({
      success: false,
      message: "Invalid inputs",
    });
  }
  removeUser(username);
  res.json({
    success: true,
    message: "Deleted the user",
  });
});

app.listen(port, () => console.log("server is running on port " + port));
