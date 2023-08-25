const isAdmin = (req, res, next) => {
    if (req.user && req.user.isAdmin=="admin") {
        next();
    } else {
        res.status(401);
        throw new Error("You are not authorized as an admin!")
    }
  }
  module.exports= isAdmin