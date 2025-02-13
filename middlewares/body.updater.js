let bodyUpdater = (req, res, next) => {
  if (req.body.age) {
    req.body.age += 2;
  }
  //   console.log(req.body);
  next();
};

module.exports = bodyUpdater;
