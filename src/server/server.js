import express from "express";
import ReactDOM from "react-dom/server";
import { indexTemplate } from "./indexTemplate";
import { App } from "../shared/App";
import axios from "axios";

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/static", express.static("./dist/client"));

app.get("/", (req, res) => {
  res.send(indexTemplate(ReactDOM.renderToString(App())));
});

app.get("/auth", (req, res) => {
  axios.post(
      'https://www.reddit.com/api/v1/access_token',
      `grant_type=authorization_code&code=${req.query.code}&redirect_uri=http://localhost:3000/auth`,
      {
        auth: { username: process.env.CLIENT_ID, password: 'MTEO9_vkfnO2KFM91kROMpWk4H2V2A' },
        headers: { 'Content-type': 'application/x-www-form-urlencoded' }
      }
  ).then(({ data }) => {
      res.send(indexTemplate(ReactDOM.renderToString(App()), data['access_token']),);
      }
  ).catch(console.log)
});

app.listen(PORT, () => {
  console.log(`server started on port http://localhost:${PORT}`);
});
