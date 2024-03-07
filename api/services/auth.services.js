const { expressjwt :jwt } = require("express-jwt");

const SECRET_KEY = process.env.SECRET_KEY;

const authenticate = jwt({
    secret: SECRET_KEY,
    algorithms: ["HS256"],
    credentialsRequired: false,
    getToken: function fromHeaderOrQuerystring(req) {
      if (
        req.headers.authorization &&
        req.headers.authorization.split(" ")[0] === "Bearer"
      ) {
        return req.headers.authorization.split(" ")[1];
      } else if (req.query && req.query.token) {
        return req.query.token;
      }
      return null;
    },
  })

function errorHandler(err, req, res, next) {
    if (err.name === 'UnauthorizedError') {

        return res.status(401).json({ message: 'Unauthorized' });
    }
    next(err);
}

module.exports = {
    authenticate,
    errorHandler
};
