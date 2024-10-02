//code verifier
const generateRandomString = (length) => {
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const values = crypto.getRandomValues(new Uint8Array(length));
  return values.reduce((acc, x) => acc + possible[x % possible.length], "");
};

const codeVerifier = generateRandomString(64);

//code challenge
const sha256 = async (plain) => {
  const encoder = new TextEncoder();
  const data = encoder.encode(plain);
  return window.crypto.subtle.digest("SHA-256", data);
};

const base64encode = (input) => {
  return btoa(String.fromCharCode(...new Uint8Array(input)))
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
};

const hashed = await sha256(codeVerifier);
const codeChallenge = base64encode(hashed);

//requesting user authorization
const clientId = "1c49a3c0481a4557a67ef4362f260b61";
const redirectUri = "http://localhost:8080";

const scope = "user-read-private user-read-email";
const authUrl = new URL("https://accounts.spotify.com/authorize");

window.localStorage.setItem("code_verifier", codeVerifier);

const params = {
  response_type: "code",
  client_id: clientId,
  scope,
  code_challenge_method: "S256",
  code_challenge: codeChallenge,
  redirect_uri: redirectUri,
};

function authorize() {
  authUrl.search = new URLSearchParams(params).toString();
  window.location.href = authUrl.toString();
}

function handleRedirect() {
  let code = getCode();
  getToken(code);
  window.location.href = redirectUri;
}

//parse url to retrieve code param
function getCode() {
  const urlParams = new URLSearchParams(window.location.search);
  let code = urlParams.get("code");
  return code;
}

const getToken = async (code) => {
  let codeVerifier = localStorage.getItem("code_verifier");

  const payload = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      client_id: clientId,
      grant_type: "authorization_code",
      code,
      redirect_uri: redirectUri,
      code_verifier: codeVerifier,
    }),
  };

  const body = await fetch(url, payload);
  const response = await body.json();

  localStorage.setItem("access_token", response.access_token);
};
