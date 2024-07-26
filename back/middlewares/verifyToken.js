import jwt from "jsonwebtoken";
const verifyToken = (req, res, next) => {
  const token = req.header("access_token");
  if (!token) return res.status(401).send("Access Denied");
  try {
    const verifiedUser = jwt.verify(token, process.env.TOKEN_SECRET);
    req.verifiedUser = verifiedUser;
    next();
  } catch (err) {
    res.status(403).send("Invalid Token");
  }
};
export default verifyToken;
