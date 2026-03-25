export default function handler(req, res) {
  res.redirect(
    `https://github.com/login/oauth/authorize?client_id=Ov23li1n0ypqYhc1guPy&scope=repo`,
  );
}
