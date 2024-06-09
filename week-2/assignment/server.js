import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 8000;

const fileName = fileURLToPath(import.meta.url);
const dirname = path.dirname(fileName);

app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is ready",
  });
});

app.get("/", (req, res) => {
  const folderPath = path.join(dirname + "/files");

  fs.readdir(folderPath, (error, data) => {
    if (error) {
      return res.status(400).json({
        success: true,
        message: "Error occurred",
        error,
      });
    }
    res.status(200).json({
      success: true,
      message: "All files",
      data,
    });
  });
});

app.get("/:fileName", (req, res) => {
  const fileName = req.params.fileName;
  const filePath = path.join(dirname + "/files/" + fileName);

  fs.readFile(filePath, "utf8", (error, data) => {
    if (error) {
      return res.status(400).json({
        success: true,
        message: "Error occurred",
        error,
      });
    }

    res.status(200).json({
      success: true,
      message: "Files content",
      data,
    });
  });
});

app.listen(port, () => console.log("server is listening on port " + port));
