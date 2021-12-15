import retiroRoutes from './routes/retiro.routes'
import jwtMiddle from './middleware/jwtMiddle'

export default (app) => {

  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
  
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, authorization"
    );
    res.header(
      "Access-Control-Allow-Methods",
      "PUT, GET, POST, DELETE, OPTIONS"
    );
    next();
  });
  app.use('/api', /* jwtMiddle */ retiroRoutes);

}