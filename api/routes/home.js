async function getHomeDatas(req, res, next) {
    try {
        res.send('<h1>Hello World!</h1>')
    } catch (err) {
      next(err);
    }
  }
  
  module.exports = {
      getHomeDatas
  };