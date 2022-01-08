import retiroRoutes from './routes/retiro.routes'
import jwtMiddle from './middleware/jwtMiddle'

export default (app) => {

//   app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', 'http://localhost:8080','*');
//     res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//     res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
//     next();
// });

  app.use('/api', /* jwtMiddle */ retiroRoutes);
  // app.use((req, res, next) => {
  //   res.header('Access-Control-Allow-Origin',' http://localhost:8080', '*');
  //   res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  //   res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  //   res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  //   next();
//});


}