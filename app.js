import express from "express";
import session from "express-session";
import morgan from "morgan";
import ViteExpress from "vite-express";
import axios from "axios";
import querystring from "node:querystring";
import dotenv from "dotenv";

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

//ROUTES
let redirect_uri = process.env.REDIRECT_URI || "http://localhost:8000/callback";

app.get("/login", function (req, res) {
  res.redirect(
    "https://accounts.spotify.com/authorize?" +
      querystring.stringify({
        response_type: "code",
        client_id: process.env.SPOTIFY_CLIENT_ID,
        scope: "user-read-private user-read-email",
        redirect_uri,
      })
  );
});

app.get("/callback", function (req, res) {
  let code = req.query.code || null;
  let authOptions = {
    url: "https://accounts.spotify.com/api/token",
    form: {
      code: code,
      redirect_uri,
      grant_type: "authorization_code",
    },
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        new Buffer(
          process.env.SPOTIFY_CLIENT_ID +
            ":" +
            process.env.SPOTIFY_CLIENT_SECRET
        ).toString("base64"),
    },
    json: true,
  };
  // request.post(authOptions, function (error, response, body) {
  //   var access_token = body.access_token;
  //   let uri = process.env.FRONTEND_URI || "http://localhost:8000/new-mood";
  //   res.redirect(uri + "?access_token=" + access_token);
  // });

  axios
    .post(authOptions)
    .then((response) => {
      const access_token = response.data.access_token;
      const uri = process.env.FRONTEND_URI || "http://localhost:8000/new-mood";
      res.redirect(`${uri}?access_token=${access_token}`);
    })
    .catch((error) => {
      // Handle error here
      console.error(error);
      res.status(500).send("Error occurred during authentication.");
    });
});
//

ViteExpress.listen(app, port, () =>
  console.log(`Server is listening on http://localhost:${port}`)
);
