import express, { Request, Response } from "express";
import * as nodeFetch from "node-fetch";
import path from "path";
import fs from "node:fs";
import { createApi } from "unsplash-js";

const unsplash = createApi({
  accessKey: "w3RfaqXkhVmuodyyszutfM1dN-hy3v7m2t-9SA3klkc",
  fetch: nodeFetch.default as unknown as typeof fetch,
});

const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const api = express.Router();
const v1 = express.Router();

v1.use(
  "/photos",
  express.Router().get("/", async (req: Request, res: Response) => {
    const { pageNumber } = req.query;

    const photos = await unsplash.search.getPhotos({
      query: "cat",
      page: pageNumber ? Math.max(Number(pageNumber), 1) : 1,
      perPage: 25,
      color: "green",
      orientation: "portrait",
    });

    res.send(photos);
  })
);

api.use("/v1", v1);
app.use("/api", api);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
