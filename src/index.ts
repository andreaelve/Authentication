import express, { Request, Response, NextFunction } from "express";
import path from "path";

const PORT = 3000;

const app = express();

app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req: Request, res: Response, next: NextFunction): void => {
    try {
      res.send("index.html");
    } catch (error) {
      next(error);
    }
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})