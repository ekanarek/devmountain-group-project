import express from "express";
import session from "express-session";
import morgan from "morgan";
import ViteExpress from "vite-express";
import axios from "axios";
import querystring from "node:querystring";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const app = express();
const port = "8000";
ViteExpress.config({ printViteDevServerHost: true });

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  session({ secret: "ssshhhhh", saveUninitialized: true, resave: false })
);
app.use(cors());

//ROUTES
let redirect_uri = process.env.REDIRECT_URI || "http://localhost:8000/callback";

app.get("/login", function (req, res) {
  res.redirect(
    "https://accounts.spotify.com/authorize?" +
      querystring.stringify({
        response_type: "code",
        client_id: process.env.SPOTIFY_CLIENT_ID,
        scope:
          "user-read-private user-read-email playlist-modify-public playlist-modify-private",
        redirect_uri,
      })
  );
});

app.get("/callback", async function (req, res) {
  let code = req.query.code || null;

  const authOptions = {
    method: "post",
    url: "https://accounts.spotify.com/api/token",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        Buffer.from(
          `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
        ).toString("base64"),
    },
    data: new URLSearchParams({
      code: code,
      redirect_uri: redirect_uri, // make sure redirect_uri is defined
      grant_type: "authorization_code",
    }).toString(),
  };

  try {
    const response = await axios(authOptions);
    const access_token = response.data.access_token;
    const uri = process.env.FRONTEND_URI || "http://localhost:8000/new-mood";
    res.redirect(`${uri}?access_token=${access_token}`);
  } catch (error) {
    console.error("Error getting access token:", error);
    res.status(500).send("Authentication failed");
  }
});

ViteExpress.listen(app, port, () =>
  console.log(`Server is listening on http://localhost:${port}`)
);
