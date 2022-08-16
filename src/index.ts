import express, { Request, Response, NextFunction } from "express";
import path from "path";

const PORT = 3000;

const app = express();

app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req: Request, res: Response, next: NextFunction): void => {
  try {
    res.sendFile("index.html");
  } catch (error) {
    next(error);
  }
});

app.get("/*", (req: Request, res: Response, next: NextFunction): void => {
  res.sendFile(path.join(__dirname, '../public/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})