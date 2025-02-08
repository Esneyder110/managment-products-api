import express, { type Request, type Response } from "express";
import { config } from "dotenv";
import cors from "cors";

import { appErrorHandler } from "./error/errorHandler";
import { apiRouter } from "./routes";

config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", async (_req: Request, res: Response) => {
  res.send("Express Typescript on Vercel");
});

apiRouter(app);

app.use((_req, res) => {
  res.status(404).send("<h1>Not found</h1>");
});

appErrorHandler(app);

// const server = app.listen(port, () => {
//   return console.log(`Server is listening on ${port}`);
// });

export default app;
