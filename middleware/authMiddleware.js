const jwt = require("jsonwebtoken");
const jwtSecretKey = process.env.JWT_SECRET;

const authMiddleware = (handler) => {
  return async (req, res) => {
    try {
      const authorizationToken = req.headers.authorization;

      if (authorizationToken) {
        const data = jwt.verify(authorizationToken, jwtSecretKey);
        req.auth_data = data;
        return handler(req, res);
      }
      res.status(401).json({
        error: "Unauthorized",
      });
    } catch (error) {
      return res.status(401).json({
        error: "Unauthorized Error",
      });
    }
  };
};
export default authMiddleware;
