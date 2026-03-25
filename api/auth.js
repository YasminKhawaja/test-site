export default function handler(req, res) {
  const clientId = "Ov23li1n0ypqYhc1guPy";

  const redirectUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=repo`;

  res.redirect(redirectUrl);
}
