async function getHomeDatas(req, res, next) {
    try {
        res.send('<h1>Hello World!d</h1>')
    } catch (err) {
      next(err);
    }
  }
  
  module.exports = {
      getHomeDatas
  };