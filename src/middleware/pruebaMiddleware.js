


var pruebaMiddleware = function (req, res, next) {
    console.log('funciona el middleware');
    next();
  };

  export default pruebaMiddleware
